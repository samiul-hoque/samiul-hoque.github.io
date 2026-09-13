# Room Configurator

A local room configurator for `room-configurator.glb`. Two mutually-exclusive button
groups — **Furniture** (4 options) and **Roof** (6 options) — each show one
layer of the model at a time and hide the rest. The room shell (`base 1`) stays
visible throughout.

Everything runs offline: three.js r160 is vendored under `vendor/`, so there is
no CDN and no npm install.

## Running it

Double-click **`serve.bat`**. It starts a small web server and opens the page.
Press Ctrl+C (or close the window) to stop it.

From a terminal instead:

```powershell
powershell -ExecutionPolicy Bypass -File serve.ps1          # default port 8080
powershell -ExecutionPolicy Bypass -File serve.ps1 -Port 3000 -NoBrowser
```

If the port is busy the script tries the next 19 and prints the URL it settled
on.

### Showing it on an iPad (or any other device on the same Wi-Fi)

Right-click **`serve-lan.bat`** → **Run as administrator**. It prints the
address to type into Safari, e.g. `http://192.168.0.141:8080/`.

Administrator is required because Windows only lets an elevated process bind a
non-loopback address. If the iPad can't reach it, Windows Firewall is blocking
the port — allow it once from an admin PowerShell:

```powershell
New-NetFirewallRule -DisplayName 'Room configurator 8080' `
  -Direction Inbound -Action Allow -Protocol TCP -LocalPort 8080 -Profile Private
```

Both devices must be on the same network, and the network must be set to
**Private** in Windows, not Public. Nothing leaves the machine — the iPad is
talking straight to this laptop.

**The server is not optional.** Opening `index.html` straight from Explorer
gives a `file://` page, and browsers block both ES modules and the `.glb` fetch
from that origin. The page detects this and says so rather than failing
silently. `serve.ps1` uses .NET's `HttpListener`, which ships with Windows — no
Python, Node or npm needed.

## Files

| Path | What it is |
| --- | --- |
| `index.html` | Page shell and the import map pointing at `vendor/` |
| `css/style.css` | All styling |
| `js/config.js` | **The file you edit** — rooms, groups, layer node names |
| `js/main.js` | Builds the buttons, drives layer visibility |
| `js/viewer.js` | three.js scene, lighting, model loading, camera framing |
| `vendor/three/` | three.js r160 (build + GLTFLoader, OrbitControls, BufferGeometryUtils, RoomEnvironment) |
| `serve.ps1`, `serve.bat` | The local web server |
| `serve-lan.bat` | Same server, reachable from other devices (run as admin) |
| `office_test.html` | The earlier single-file attempt, superseded by `index.html` |

## Adding or changing layers

Edit `js/config.js`. Each group is a radio set; each option names one node in
the `.glb`:

```js
{
  id: 'roof',
  label: 'Roof',
  options: [
    { node: 'Roof Board', label: 'Board' }   // node = name in the .glb
  ]                                          // label = text on the button
}
```

The first option in each group is what's shown on load. Any part of the model
not named in `config.js` is never touched and stays permanently visible.

If a node name is wrong, its button renders struck-through and disabled, and
the browser console says which name it couldn't find. A node that exists but
holds no mesh logs an export warning instead — that's the "empty variant group"
case, and it needs a re-export rather than a config change.

### One gotcha worth knowing

`GLTFLoader` does not keep object names verbatim. It runs every name through
`PropertyBinding.sanitizeNodeName`, which turns each space into an underscore
and strips `[ ] . : /`. So `Furniture 1` in the `.glb` arrives in three.js as
`Furniture_1`, and a plain `getObjectByName('Furniture 1')` finds nothing —
which is why a config that looks correct can leave every button dead.

`js/main.js` works around this by indexing each object under both its
three.js name and the original exported name (which `GLTFLoader` preserves on
`userData.name`). Either spelling works in `config.js`.

### The other gotcha: names are not unique

This export contains **two** objects called `Furniture 1` — the top-level group,
and one nested inside `Furniture 4`. A lookup by name alone could pick either.

`buildNodeIndex` breaks ties by **depth**: the shallowest match wins. The
configurable layers are always top-level groups, so a nested namesake is by
definition part of some other layer. The alternative — first match in traversal
order — would hand the decision to whatever order SimLab wrote the nodes in,
which is not something to depend on. Collisions that touch a configured layer
are logged to the console.

## The model

`room-configurator.glb` is 28.6 MB: 2836 nodes, 1300 meshes, 57 materials and 20
embedded textures. Sixteen of the 57 materials carry maps; the rest are flat
colours needing no UVs.

**Every textured material has UVs wherever it is used** — zero mismatches. The
UV problem present in the earlier exports is fully resolved.

**What remains is material-less geometry**, which `GLTFLoader` renders with a
plain white `MeshStandardMaterial`. Counts are primitives without any material:

| Group | Primitives | No material |
| --- | --- | --- |
| `base 1` | 22 | 0 |
| `Furniture 1` | 289 | 11 |
| `Furniture 2` | 516 | 16 |
| `Furniture 3` | 44 | 0 |
| `Furniture 4` | 307 | 17 |
| `Roof Board` | 1 | **1 — the whole layer** |
| `Roof Board 2` | 2 | 1 |
| `Roof Board 3` | 5 | 2 |
| `Roof Metal` | 29 | **28** |
| `Roof Metal 2` | 29 | 19 |
| `Roof Gypsum` | 56 | **55** |

The furniture is in good shape. The roofs are almost entirely unmaterialled, so
all six roof options currently render as white slabs. If white ceilings are the
intent that's fine; if not, the roofs are where the next export pass should go.

All base-colour textures are fully opaque, so the `alphaMode: MASK` that SimLab
writes on every material is harmless here — no alpha-test cut-outs.

### Performance note

At 1300 meshes this is heavy enough that software rendering (a machine with no
GPU acceleration, or a headless browser) takes minutes per frame. On real
hardware it is fine. If it ever needs to run on weak clients, merging the many
small primitives per layer at export time would help far more than any
viewer-side change.

### The earlier file

`office_test.glb` was the first export and uses
`KHR_materials_pbrSpecularGlossiness`, which three.js dropped support for back
in r124. It renders correctly anyway because the export also includes the
`pbrMetallicRoughness` fallback the glTF spec requires, and the extension is
listed in `extensionsUsed` rather than `extensionsRequired`.

Both files need an environment map for their metallic materials to read as
anything but flat grey — `viewer.js` generates one from `RoomEnvironment` via
`PMREMGenerator`. Note that `RoomEnvironment` must be handed the renderer;
constructed without it, it picks the legacy light intensity and comes out
roughly 180× too dim under r160's physical lighting.

`viewer.js` also raises every texture's `anisotropy` to the hardware maximum
after load. Floors and desktops are seen at grazing angles, where the default
filtering smears tiled detail into mush a few metres out.

Node names in the current file:

- Furniture: `Furniture 1`, `Furniture 2`, `Furniture 3`, `Furniture 4`
- Roof: `Roof Board`, `Roof Board 2`, `Roof Board 3`, `Roof Metal`,
  `Roof Metal 2`, `Roof Gypsum`
- Always visible: `base 1`

## Adding more rooms

`config.js` currently exports a single `ROOM`. To support the other rooms,
export a keyed map of room objects, have `main.js` read a room id (from a
`?room=` query param or a picker), and call `viewer.load()` with that room's
`file`. `viewer.clear()` already disposes the previous model's geometry,
materials and textures, so switching rooms will not leak GPU memory.
