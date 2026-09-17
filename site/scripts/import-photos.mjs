/**
 * import-photos.mjs — turn a folder of phone photos into web-ready images.
 *
 * Why this exists: the Samsung S24 Ultra shoots HEIC by default. sharp reads
 * HEIC *metadata* fine but cannot decode the pixels, because sharp's prebuilt
 * libvips bundles libheif without an HEVC decoder plugin (patent licensing).
 * The failure looks like "Decoder plugin generated an error" plus a string of
 * "bad seek" lines, which is misleading: the files are not corrupt.
 *
 * So HEIC is decoded by heic-convert (pure JS/WASM libde265, no system deps)
 * and everything after that is sharp.
 *
 * Also strips all metadata, which matters: phone photos carry GPS coordinates.
 * sharp drops metadata unless asked to keep it, and heic-convert decodes to raw
 * pixels, so nothing survives either path. Do not add .withMetadata().
 *
 * Usage:
 *   node scripts/import-photos.mjs <dir>                 # convert in place
 *   node scripts/import-photos.mjs <src> --out <dir>
 *   node scripts/import-photos.mjs <dir> --width 2000    # default 1600
 *   node scripts/import-photos.mjs <dir> --quality 85    # default 82
 *   node scripts/import-photos.mjs <dir> --keep          # keep the originals
 *   node scripts/import-photos.mjs <dir> --dry
 *
 * Originals are moved to <dir>/_originals/ unless --keep is passed, so the
 * HEICs never get committed. Add a .gitignore there if you want them kept
 * locally. Re-running is safe: an existing .jpg is skipped unless --force.
 */

import { readdir, stat, mkdir, readFile, writeFile, rename } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const MAX_WIDTH_DEFAULT = 1600;
const QUALITY_DEFAULT = 82;

function parseArgs(argv) {
  const args = { _: [], width: MAX_WIDTH_DEFAULT, quality: QUALITY_DEFAULT };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--out') args.out = argv[++i];
    else if (a === '--width') args.width = Number(argv[++i]);
    else if (a === '--quality') args.quality = Number(argv[++i]);
    else if (a === '--keep') args.keep = true;
    else if (a === '--force') args.force = true;
    else if (a === '--dry') args.dry = true;
    else args._.push(a);
  }
  return args;
}

const HEIC = /\.(heic|heif)$/i;
const RASTER = /\.(jpe?g|png|webp|tiff?)$/i;

/** HEIC in, full-size JPEG buffer out. Everything else passes straight through. */
async function toDecodableBuffer(file) {
  const buf = await readFile(file);
  if (!HEIC.test(file)) return buf;
  const { default: convert } = await import('heic-convert');
  // quality 1 here is deliberate: this is an intermediate, sharp does the real
  // compression below. Re-compressing twice at 0.8 would be visibly worse.
  const out = await convert({ buffer: buf, format: 'JPEG', quality: 1 });
  return Buffer.from(out);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const srcDir = args._[0];
  if (!srcDir) {
    console.error('usage: node scripts/import-photos.mjs <dir> [--out <dir>] [--width n] [--quality n] [--keep] [--force] [--dry]');
    process.exit(1);
  }
  if (!existsSync(srcDir)) {
    console.error(`no such directory: ${srcDir}`);
    process.exit(1);
  }
  const outDir = args.out ?? srcDir;
  const originalsDir = path.join(srcDir, '_originals');

  const entries = (await readdir(srcDir))
    .filter((f) => HEIC.test(f) || RASTER.test(f))
    .sort();

  if (entries.length === 0) {
    console.log('nothing to do: no images found');
    return;
  }

  if (!args.dry) await mkdir(outDir, { recursive: true });

  let converted = 0;
  let skipped = 0;

  for (const name of entries) {
    const src = path.join(srcDir, name);
    const base = name.replace(/\.[^.]+$/, '');
    const dest = path.join(outDir, `${base}.jpg`);

    if (path.resolve(src) === path.resolve(dest) && !HEIC.test(name) && !args.force) {
      skipped++;
      continue;
    }
    if (existsSync(dest) && path.resolve(src) !== path.resolve(dest) && !args.force) {
      console.log(`skip   ${name} (${path.basename(dest)} exists, --force to redo)`);
      skipped++;
      continue;
    }

    const before = (await stat(src)).size;

    if (args.dry) {
      const meta = await sharp(await readFile(src).catch(() => null) ?? src)
        .metadata()
        .catch(() => ({}));
      console.log(`would  ${name} -> ${path.basename(dest)} (${meta.width ?? '?'}x${meta.height ?? '?'}, ${Math.round(before / 1024)}KB)`);
      continue;
    }

    try {
      const input = await toDecodableBuffer(src);
      const pipeline = sharp(input)
        // .rotate() with no argument applies the EXIF orientation and then
        // clears it, so the pixels are upright for viewers that ignore EXIF.
        .rotate()
        .resize({ width: args.width, height: args.width, fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: args.quality, progressive: true, mozjpeg: true });

      const { width, height, size } = await pipeline.toFile(dest);

      if (HEIC.test(name)) {
        if (args.keep) {
          // leave the original where it is
        } else {
          await mkdir(originalsDir, { recursive: true });
          await rename(src, path.join(originalsDir, name));
        }
      }

      converted++;
      console.log(
        `ok     ${name} -> ${path.basename(dest)}  ${width}x${height}  ${Math.round(before / 1024)}KB -> ${Math.round(size / 1024)}KB`,
      );
    } catch (err) {
      console.error(`FAIL   ${name}: ${err.message}`);
      process.exitCode = 1;
    }
  }

  console.log(`\n${converted} converted, ${skipped} skipped`);
  if (converted > 0 && !args.keep) {
    console.log(`originals moved to ${originalsDir}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
