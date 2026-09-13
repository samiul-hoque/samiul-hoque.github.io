// ---------------------------------------------------------------------------
// Room configuration.
//
// `node` values are matched EXACTLY (case + spacing) against object names
// inside the .glb. The names below were read straight out of the .glb, so
// don't retype them from memory — re-check the file if you re-export.
//
// Each group behaves as a radio set: picking one option shows that node's
// subtree and hides every sibling option in the same group. Anything in the
// model that isn't listed here (the "base 1" shell, floor, walls) is left
// alone and stays permanently visible.
// ---------------------------------------------------------------------------

export const ROOM = {
  label: 'Office',
  // Renamed from "room configrator.glb": a literal space in a URL is fragile
  // once this is served over HTTP, not opened off disk.
  file: 'room-configurator.glb',

  groups: [
    {
      id: 'furniture',
      label: 'Furniture',
      options: [
        { node: 'Furniture 1', label: 'Furniture 1' },
        { node: 'Furniture 2', label: 'Furniture 2' },
        { node: 'Furniture 3', label: 'Furniture 3' },
        { node: 'Furniture 4', label: 'Furniture 4' }
      ]
    },
    {
      id: 'roof',
      label: 'Roof',
      options: [
        { node: 'Roof Board',   label: 'Board'   },
        { node: 'Roof Board 2', label: 'Board 2' },
        { node: 'Roof Board 3', label: 'Board 3' },
        { node: 'Roof Metal',   label: 'Metal'   },
        { node: 'Roof Metal 2', label: 'Metal 2' },
        { node: 'Roof Gypsum',  label: 'Gypsum'  }
      ]
    }
  ]
};
