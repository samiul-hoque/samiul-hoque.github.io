// ---------------------------------------------------------------------------
// Configurator: builds the option buttons from ROOM and drives layer
// visibility on the loaded model.
// ---------------------------------------------------------------------------

import { ROOM } from './config.js';
import { Viewer } from './viewer.js';

const els = {
  stage:    document.getElementById('stage'),
  groups:   document.getElementById('groups'),
  roomName: document.getElementById('room-name'),
  loader:   document.getElementById('loader'),
  loaderBar:  document.querySelector('#loader .bar span'),
  loaderText: document.querySelector('#loader .status'),
  error:    document.getElementById('error'),
  errorText: document.querySelector('#error .message'),
  reset:    document.getElementById('reset-view'),
  summary:  document.getElementById('summary')
};

/** Currently selected node name per group id. */
const selection = Object.create(null);

let viewer = null;
let model = null;

/** name (exported form and three's form) -> Object3D. Built once per load. */
let nodeIndex = null;

els.roomName.textContent = ROOM.label;

// A page opened straight off disk can't fetch the .glb — module scripts and
// XHR are both blocked by the file:// origin policy. Say so plainly instead of
// letting it fail as an opaque network error.
if (location.protocol === 'file:') {
  showError(
    'This page is open as a local file (file://), which browsers block from ' +
    'loading the .glb. Start the bundled web server instead — double-click ' +
    'serve.bat in this folder, then open the address it prints.'
  );
} else {
  start();
}

function start() {
  buildPanel();

  viewer = new Viewer(els.stage);
  els.reset.addEventListener('click', () => viewer.resetView());

  viewer
    .load(ROOM.file, onProgress)
    .then((loaded) => {
      model = loaded;
      buildNodeIndex();
      verifyNodes();
      // Every group starts on its first option, so exactly one layer per
      // group is visible before the user touches anything.
      for (const group of ROOM.groups) {
        select(group.id, group.options[0].node);
      }
      els.loader.hidden = true;
    })
    .catch((err) => {
      console.error(err);
      showError(
        `Could not load "${ROOM.file}". Check that the file sits next to ` +
        'index.html and that the server is serving this folder. See the ' +
        'browser console for details.'
      );
    });
}

function onProgress(fraction) {
  if (fraction === null) {
    els.loaderText.textContent = 'Loading model…';
    els.loaderBar.style.width = '100%';
    els.loaderBar.classList.add('indeterminate');
    return;
  }
  els.loaderBar.classList.remove('indeterminate');
  els.loaderBar.style.width = `${Math.round(fraction * 100)}%`;
  els.loaderText.textContent = `Loading model… ${Math.round(fraction * 100)}%`;
}

// --- UI ---------------------------------------------------------------------

function buildPanel() {
  for (const group of ROOM.groups) {
    const section = document.createElement('section');
    section.className = 'group';
    section.dataset.group = group.id;

    const heading = document.createElement('h2');
    heading.id = `group-${group.id}-label`;
    heading.textContent = group.label;
    section.appendChild(heading);

    // radiogroup, because the options are mutually exclusive — this is what
    // tells a screen reader that picking one deselects the others.
    const list = document.createElement('div');
    list.className = 'options';
    list.setAttribute('role', 'radiogroup');
    list.setAttribute('aria-labelledby', heading.id);

    group.options.forEach((option) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option';
      btn.setAttribute('role', 'radio');
      btn.setAttribute('aria-checked', 'false');
      btn.dataset.node = option.node;
      btn.textContent = option.label;
      btn.addEventListener('click', () => select(group.id, option.node));
      list.appendChild(btn);
    });

    section.appendChild(list);
    els.groups.appendChild(section);
  }
}

// --- Node lookup ------------------------------------------------------------

/**
 * GLTFLoader does not keep object names verbatim: it runs them through
 * PropertyBinding.sanitizeNodeName, which turns every space into an
 * underscore and strips [ ] . : / — so "Furniture 1" in the .glb arrives as
 * "Furniture_1", and a plain getObjectByName('Furniture 1') finds nothing.
 * The name as exported survives on userData.name, so index both and let
 * config.js spell node names either way.
 *
 * Names are not unique: this export has a "Furniture 1" nested inside
 * "Furniture 4" as well as the top-level group of that name. Ties are broken
 * by depth — the shallowest match wins — because the configurable layers are
 * always top-level groups, and a nested namesake is a part of some other
 * layer. Relying on traversal order instead would leave the choice to the
 * order SimLab happened to write the nodes in.
 */
function buildNodeIndex() {
  nodeIndex = new Map();
  const depths = new Map();
  const duplicates = new Map();

  model.traverse((obj) => {
    let depth = 0;
    for (let p = obj.parent; p; p = p.parent) depth++;

    for (const key of [obj.userData?.name, obj.name]) {
      if (!key) continue;
      const seen = depths.get(key);
      if (seen === undefined) {
        nodeIndex.set(key, obj);
        depths.set(key, depth);
        continue;
      }
      duplicates.set(key, (duplicates.get(key) ?? 1) + 1);
      if (depth < seen) {
        nodeIndex.set(key, obj);
        depths.set(key, depth);
      }
    }
  });

  // Only warn about collisions that touch a configured layer — the model is
  // full of repeated part names like "Geom3D_" that nothing looks up.
  for (const group of ROOM.groups) {
    for (const option of group.options) {
      const count = duplicates.get(option.node);
      if (!count) continue;
      console.warn(
        `Name collision: "${option.node}" matches ${count} objects in ${ROOM.file}. ` +
        `Using the shallowest (depth ${depths.get(option.node)}). Rename the ` +
        'others in SimLab if the wrong geometry is switching.'
      );
    }
  }
}

function findNode(name) {
  return nodeIndex?.get(name) ?? null;
}

/** Flags any configured node that is absent or geometry-less in the .glb. */
function verifyNodes() {
  for (const group of ROOM.groups) {
    for (const option of group.options) {
      const node = findNode(option.node);
      const button = optionButton(group.id, option.node);

      if (!node) {
        console.error(
          `Config error: node "${option.node}" (group "${group.label}") is not in ${ROOM.file}.`
        );
        if (button) {
          button.disabled = true;
          button.title = 'Missing from the model file';
        }
        continue;
      }

      let hasMesh = false;
      node.traverse((child) => { if (child.isMesh) hasMesh = true; });
      if (!hasMesh) {
        console.warn(
          `Export warning: node "${option.node}" (group "${group.label}") has no mesh ` +
          'geometry — probably an empty group, so the button will appear to do nothing.'
        );
      }
    }
  }
}

// --- Visibility -------------------------------------------------------------

/**
 * Shows `nodeName` within its group and hides every other option in that
 * group. Layers outside ROOM.groups are never touched.
 */
function select(groupId, nodeName) {
  const group = ROOM.groups.find((g) => g.id === groupId);
  if (!group || !model) return;

  for (const option of group.options) {
    const node = findNode(option.node);
    if (!node) continue;

    const visible = option.node === nodeName;
    // Walk the subtree rather than relying on inherited visibility: a child
    // left at visible=false by an earlier toggle would otherwise stay hidden
    // when its group is switched back on.
    node.traverse((child) => { child.visible = visible; });
  }

  selection[groupId] = nodeName;
  syncButtons(groupId, nodeName);
  syncSummary();
}

function syncButtons(groupId, nodeName) {
  const section = els.groups.querySelector(`.group[data-group="${groupId}"]`);
  if (!section) return;
  section.querySelectorAll('.option').forEach((btn) => {
    const on = btn.dataset.node === nodeName;
    btn.classList.toggle('is-active', on);
    btn.setAttribute('aria-checked', String(on));
  });
}

function syncSummary() {
  els.summary.textContent = ROOM.groups
    .map((group) => {
      const option = group.options.find((o) => o.node === selection[group.id]);
      return `${group.label}: ${option ? option.label : '—'}`;
    })
    .join('  ·  ');
}

function optionButton(groupId, nodeName) {
  return els.groups.querySelector(
    `.group[data-group="${groupId}"] .option[data-node="${nodeName}"]`
  );
}

function showError(message) {
  els.loader.hidden = true;
  els.errorText.textContent = message;
  els.error.hidden = false;
}
