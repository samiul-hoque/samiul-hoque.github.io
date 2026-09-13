// ---------------------------------------------------------------------------
// Thin wrapper around the three.js scene: renderer setup, lighting, model
// loading and camera framing. Knows nothing about the configurator UI.
// ---------------------------------------------------------------------------

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

export class Viewer {
  constructor(container) {
    this.container = container;
    this.model = null;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x16181d);

    this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;
    container.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.maxPolarAngle = Math.PI * 0.495; // don't let the user go under the floor

    // The model's materials are metallic (metallicFactor 0.5 throughout), so
    // they need an environment map to read as anything but flat grey.
    // RoomEnvironment must be handed the renderer: it picks its light
    // intensity from renderer._useLegacyLights, and without it defaults to the
    // legacy value, which is ~180x too dim under r160's physical lighting.
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(this.renderer), 0.04).texture;
    pmrem.dispose();

    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x404550, 1.2));

    const key = new THREE.DirectionalLight(0xffffff, 1.8);
    key.position.set(1, 2, 1.5);
    this.scene.add(key);

    const fill = new THREE.DirectionalLight(0xffffff, 0.6);
    fill.position.set(-1.5, 1, -1);
    this.scene.add(fill);

    this._resize = this._resize.bind(this);
    window.addEventListener('resize', this._resize);
    this._resize();

    this._tick();
  }

  /**
   * Loads a .glb. Resolves with the loaded scene graph.
   * @param {string} url
   * @param {(fraction:number|null)=>void} [onProgress] fraction is null when
   *        the server sends no Content-Length (progress is unknowable).
   */
  load(url, onProgress) {
    return new Promise((resolve, reject) => {
      new GLTFLoader().load(
        url,
        (gltf) => {
          this.clear();
          this.model = gltf.scene;
          this._applyAnisotropy(this.model);
          this.scene.add(this.model);
          this.frameModel();
          resolve(this.model);
        },
        (event) => {
          if (!onProgress) return;
          onProgress(event.lengthComputable ? event.loaded / event.total : null);
        },
        reject
      );
    });
  }

  /**
   * Raises texture anisotropy to the hardware maximum. Floors and desktops are
   * seen at grazing angles, where the default isotropic filtering smears tiled
   * detail (wood grain, marble veining) into mush a few metres out.
   * Each texture is touched once — they're shared between materials.
   */
  _applyAnisotropy(root) {
    const max = this.renderer.capabilities.getMaxAnisotropy();
    const seen = new Set();
    root.traverse((obj) => {
      if (!obj.material) return;
      const materials = Array.isArray(obj.material) ? obj.material : [obj.material];
      for (const material of materials) {
        for (const value of Object.values(material)) {
          if (!value || !value.isTexture || seen.has(value)) continue;
          seen.add(value);
          value.anisotropy = max;
          value.needsUpdate = true;
        }
      }
    });
  }

  clear() {
    if (!this.model) return;
    this.scene.remove(this.model);
    this.model.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose();
      if (!obj.material) return;
      const materials = Array.isArray(obj.material) ? obj.material : [obj.material];
      for (const material of materials) {
        for (const value of Object.values(material)) {
          if (value && value.isTexture) value.dispose();
        }
        material.dispose();
      }
    });
    this.model = null;
  }

  /** Fits the camera to the model's bounds and remembers it as the home view. */
  frameModel() {
    if (!this.model) return;

    const box = new THREE.Box3().setFromObject(this.model);
    if (box.isEmpty()) return;

    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    this._bounds = { center, radius: size.length() * 0.5 };

    const distance = this._fitDistance();
    this.camera.near = Math.max(distance / 1000, 0.001);
    this.camera.far = distance * 10;
    this.controls.minDistance = this._bounds.radius * 0.2;
    this.controls.maxDistance = distance * 3;

    this.resetView();
  }

  /**
   * Camera distance that fits the model's bounding sphere in the CURRENT
   * viewport. Fitting the vertical FOV alone is only correct on landscape
   * viewports — on a portrait one (an iPad held upright) the horizontal FOV is
   * the narrower of the two, and fitting vertically crops the sides off.
   */
  _fitDistance() {
    const vFov = (this.camera.fov * Math.PI) / 180;
    const hFov = 2 * Math.atan(Math.tan(vFov / 2) * this.camera.aspect);
    const fov = Math.min(vFov, hFov);
    return (this._bounds.radius / Math.sin(fov / 2)) * 1.1; // 10% breathing room
  }

  /** Re-fits for the viewport as it is now, so it stays correct after a rotate. */
  resetView() {
    if (!this._bounds) return;
    const distance = this._fitDistance();
    this.camera.position.copy(this._bounds.center).add(
      new THREE.Vector3(0.8, 0.45, 1).normalize().multiplyScalar(distance)
    );
    this.controls.target.copy(this._bounds.center);
    this.camera.updateProjectionMatrix();
    this.controls.update();
  }

  _resize() {
    const { clientWidth: w, clientHeight: h } = this.container;
    if (!w || !h) return;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h, false);
  }

  _tick() {
    requestAnimationFrame(() => this._tick());
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}
