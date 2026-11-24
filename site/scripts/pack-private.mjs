// Pack one sandbox post into a single self-contained page, encrypt it, and
// write a loader that decrypts it in the browser with the key from the URL
// fragment. The fragment never reaches the server, so the repo only ever
// holds ciphertext. Same scheme as the Leveor preview (session 19).
//
//   SANDBOX_PRIVATE=1 npx astro build
//   node scripts/pack-private.mjs <slug> <out-id> [base64url-key]
//
// Writes public/sandbox/<out-id>/index.html. Pass the same key again to keep
// an existing link working. Afterwards, rebuild normally: the private build
// left the plaintext in dist/, which must never be deployed.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const [slug, outId, keyArg] = process.argv.slice(2);
if (!slug || !/^[0-9a-f]{12}$/.test(outId ?? '')) {
  console.error('usage: node scripts/pack-private.mjs <slug> <12-hex-id> [key]');
  process.exit(1);
}
const page = path.join('dist', 'sandbox', slug, 'index.html');
let html = fs.readFileSync(page, 'utf8');
const read = (p) => fs.readFileSync(path.join('dist', p.replace(/^\//, '')));
const types = { '.css': 'text/css', '.js': 'text/javascript', '.pdf': 'application/pdf', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg' };

// Stylesheets and module scripts go inline; nothing they need exists on the
// live site, because the deployed build never contains drafts.
html = html.replace(/<link rel="stylesheet" href="(\/_astro\/[^"]+\.css)"[^>]*>/g, (_, p) => `<style>${read(p)}</style>`);
html = html.replace(/<script type="module" src="(\/_astro\/[^"]+\.js)"><\/script>/g, (_, p) => {
  const js = read(p).toString();
  if (/\bimport\s*[\s{*"'(]|from\s*["']/.test(js)) throw new Error(`${p} imports other chunks; inline them first`);
  return `<script type="module">${js}</script>`;
});
// Private files (the paper) become data URIs. Links keep their download
// attribute, so browsers save them instead of navigating to a data: URL.
html = html.replace(/(href|src)="(\/(?:private|_astro)\/[^"]+)"/g, (_, attr, p) => {
  const type = types[path.extname(p)] ?? 'application/octet-stream';
  return `${attr}="data:${type};base64,${read(p).toString('base64')}"`;
});
if (/(src|href)="\/(?:_astro|private)\//.test(html)) throw new Error('unresolved local asset reference');

// The decryption key lives in the URL fragment, so in-page links (#section)
// would overwrite it and the link would stop working after a reload or a
// copy. Scroll to the target instead of changing the fragment.
const keepKey = `<script>document.addEventListener('click',(e)=>{const a=e.target.closest('a[href^="#"]');if(!a)return;const t=document.getElementById(decodeURIComponent(a.getAttribute('href').slice(1)));if(!t)return;e.preventDefault();t.scrollIntoView({behavior:'smooth'});});</script>`;
if (!html.includes('</body>')) throw new Error('no </body> to inject into');
html = html.replace('</body>', `${keepKey}</body>`);

const key = keyArg ? Buffer.from(keyArg, 'base64url') : crypto.randomBytes(32);
if (key.length !== 32) throw new Error('key must be 32 bytes');
const iv = crypto.randomBytes(12);
const c = crypto.createCipheriv('aes-256-gcm', key, iv);
const payload = Buffer.concat([iv, c.update(html, 'utf8'), c.final(), c.getAuthTag()]).toString('base64');

const loader = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex">
<meta name="referrer" content="no-referrer">
<title>Preview</title>
<style>body{margin:0;min-height:100vh;display:grid;place-items:center;font:16px/1.6 system-ui,sans-serif;background:#fff;color:#0a0a0a}p{margin:0;padding:16px;text-align:center}</style>
</head>
<body>
<p id="msg">Loading…</p>
<script>
(async () => {
  const msg = document.getElementById('msg');
  try {
    const k = location.hash.slice(1).replace(/-/g, '+').replace(/_/g, '/');
    if (!k) throw 0;
    const raw = Uint8Array.from(atob(k), (ch) => ch.charCodeAt(0));
    const data = Uint8Array.from(atob('${payload}'), (ch) => ch.charCodeAt(0));
    const key = await crypto.subtle.importKey('raw', raw, 'AES-GCM', false, ['decrypt']);
    const plain = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: data.slice(0, 12) }, key, data.slice(12));
    // document.open() is ignored while this page is still parsing.
    if (document.readyState !== 'complete') await new Promise((r) => addEventListener('load', r, { once: true }));
    document.open();
    document.write(new TextDecoder().decode(plain));
    document.close();
  } catch {
    msg.textContent = 'This page needs its full link.';
  }
})();
</script>
</body>
</html>
`;
const outDir = path.join('public', 'sandbox', outId);
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'index.html'), loader);
console.log('plaintext bytes', Buffer.byteLength(html), 'loader bytes', Buffer.byteLength(loader));
console.log('LINK', `https://samiulmakes.com/sandbox/${outId}/#${key.toString('base64url')}`);
