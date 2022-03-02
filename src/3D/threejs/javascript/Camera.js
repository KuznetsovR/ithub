import Experience from './Experience';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default class Camera {
  experience = new Experience();
  sizes = this.experience.sizes;
  canvas = this.experience.canvas;
  debug = this.experience.debug;
  time = this.experience.time;

  constructor() {
    this.container = new THREE.Object3D()
    this.container.matrixAutoUpdate = false
    if (this.debug.active) {
      this.debugFolder = this.debug.addFolder('camera');
    }

    this.target = new THREE.Vector3(0, 0, 0);
    this.targetEased = new THREE.Vector3(0, 0, 0);
    this.easing = 0.15;

    this.setAngle();
    this.setInstance();
    // this.setControls();
  }
  setAngle() {
    this.angle = new THREE.Vector3(0, -0.075, 0.037);

    if (this.debug.active) {
      this.debugFolder.add(this, 'easing').step(0.0001).min(0).max(1).name('easing');
      this.debugFolder.add(this.angle, 'x').step(0.001).min(-2).max(2).name('invertDirectionX').listen();
      this.debugFolder.add(this.angle, 'y').step(0.001).min(-2).max(2).name('invertDirectionY').listen();
      this.debugFolder.add(this.angle, 'z').step(0.001).min(-2).max(2).name('invertDirectionZ').listen();
    }
  }
  setControls() {
    this.controls = new OrbitControls(this.instance, this.canvas);
    this.controls.enableDamping = true;
  }
  setInstance() {
    this.instance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 200);
    this.instance.up.set(0, 0, 1)
    this.instance.position.copy(this.angle)
    this.instance.lookAt(new THREE.Vector3())
    // this.container.add(this.instance);

    this.time.on('tick', () => {
      this.targetEased.x += (this.target.x - this.targetEased.x) * this.easing;
      this.targetEased.y += (this.target.y - this.targetEased.y) * this.easing;
      this.targetEased.z += (this.target.z - this.targetEased.z) * this.easing;

      this.instance.position.copy(this.targetEased).add(this.angle.clone().normalize().multiplyScalar(20));
      this.instance.lookAt(this.targetEased);
    });
  }

  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height;
    this.instance.updateProjectionMatrix();
  }
  update() {
    // this.controls.update();
  }
}
