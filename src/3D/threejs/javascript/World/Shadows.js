import Experience from '../Experience';
import * as THREE from 'three';
import ShadowMaterial from '../Materials/Shadow';

export default class Shadows {
  experience = new Experience();
  time = this.experience.time;
  debug = this.experience.debug;
  renderer = this.experience.renderer;
  camera = this.experience.camera;

  alpha = 0;
  maxDistance = 3;
  distancePower = 2;
  zFightingDistance = 0.001;
  color = '#45464a';
  wireframeVisible = false;
  items = [];

  constructor() {
    this.container = new THREE.Object3D();
    this.container.matrixAutoUpdate = false;
    this.container.updateMatrix();

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.addFolder('shadows');
      // this.debugFolder.open()

      this.debugFolder.add(this, 'alpha').step(0.01).min(0).max(1);
      this.debugFolder.add(this, 'maxDistance').step(0.01).min(0).max(10);
      this.debugFolder.add(this, 'distancePower').step(0.01).min(1).max(5);
      this.debugFolder
        .add(this, 'wireframeVisible')
        .name('wireframeVisible')
        .onChange(() => {
          for (const _shadow of this.items) {
            _shadow.mesh.material = this.wireframeVisible ? this.materials.wireframe : _shadow.material;
          }
        });

      this.debugFolder.addColor(this, 'color').onChange(() => {
        this.materials.base.uniforms.uColor.value = new THREE.Color(this.color);

        for (const _shadow of this.items) {
          _shadow.material.uniforms.uColor.value = new THREE.Color(this.color);
        }
      });
    } // debug end
    this.setSun();
  }

  setSun() {
    this.sun = {
      position: new THREE.Vector3(0.5, 4, 5),
      vector: new THREE.Vector3(),
      helper: new THREE.ArrowHelper(
        new THREE.Vector3(0, 0, 1),
        new THREE.Vector3(0, 0, 0),
        1,
        0xffffff,
        0.1,
        0.4
      ),
      visible: false,
    };
    this.container.add(this.sun.helper);

    this.sun.update = () => {
      this.sun.vector
        .copy(this.sun.position)
        .multiplyScalar(1 / this.sun.position.z)
        .negate();
      this.sun.helper.position.copy(this.sun.position);

      const direction = this.sun.position.clone().negate().normalize();

      this.sun.helper.setDirection(direction);
      this.sun.helper.setLength(this.sun.helper.position.length());
    };

    this.sun.update();

    // Debug
    if (this.debug.active) {
      const folder = this.debugFolder.addFolder('sun');
      folder.open();

      folder.add(this.sun.position, 'x').step(0.01).min(-10).max(10).name('sunX').onChange(this.sun.update);
      folder.add(this.sun.position, 'y').step(0.01).min(-10).max(10).name('sunY').onChange(this.sun.update);
      folder.add(this.sun.position, 'z').step(0.01).min(0).max(10).name('sunZ').onChange(this.sun.update);
      folder.add(this.sun.helper, 'visible').name('sunHelperVisible');
    }
  }
  setMaterials() {
    // Wireframe
    this.materials = {};
    this.materials.wireframe = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });

    // Base
    this.materials.base = new ShadowMaterial();
    this.materials.base.depthWrite = false;
    this.materials.base.uniforms.uColor.value = new THREE.Color(this.color);
    this.materials.base.uniforms.uAlpha.value = 0;
    this.materials.base.uniforms.uFadeRadius.value = 0.35;
  }
  setGeometry() {
    this.geometry = new THREE.PlaneBufferGeometry(1, 1, 1, 1);
  }
  add(_reference, _options = {}) {
    const shadow = {};

    // Options
    shadow.offsetZ = typeof _options.offsetZ === 'undefined' ? 0 : _options.offsetZ;
    shadow.alpha = typeof _options.alpha === 'undefined' ? 1 : _options.alpha;

    // Reference
    shadow.reference = _reference;

    // Material
    shadow.material = this.materials.base.clone();

    // Mesh
    shadow.mesh = new THREE.Mesh(
      this.geometry,
      this.wireframeVisible ? this.materials.wireframe : shadow.material
    );
    shadow.mesh.position.z = this.zFightingDistance;
    shadow.mesh.scale.set(_options.sizeX, _options.sizeY, 2.4);

    // Save
    this.container.add(shadow.mesh);
    this.items.push(shadow);

    return shadow;
  }
}
