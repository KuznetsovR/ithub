import Experience from './Experience';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { gsap } from 'gsap';

export default class Camera {
  experience = new Experience();
  sizes = this.experience.sizes;
  canvas = this.experience.canvas;
  debug = this.experience.debug;
  time = this.experience.time;

  constructor() {
    this.container = new THREE.Object3D();
    this.container.matrixAutoUpdate = false;
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
    this.angle = {
      default: new THREE.Vector3(0, -0.075, 0.037),
      defaultZoom: 20,
      collegeBuilding: new THREE.Vector3(0.128, -0.078, 0.071),
      collegeBuildingZoom: 30,
    };

    this.angle.value = new THREE.Vector3();
    this.angle.value.copy(this.angle.default);
    this.angle.zoom = {
      value: this.angle.defaultZoom,
    };

    if (this.debug.active) {
      this.debugFolder.add(this, 'easing').step(0.0001).min(0).max(1).name('easing');
      this.debugFolder
        .add(this.angle.default, 'x')
        .step(0.001)
        .min(-2)
        .max(2)
        .name('invertDirectionX')
        .listen();
      this.debugFolder
        .add(this.angle.default, 'y')
        .step(0.001)
        .min(-2)
        .max(2)
        .name('invertDirectionY')
        .listen();
      this.debugFolder
        .add(this.angle.default, 'z')
        .step(0.001)
        .min(-2)
        .max(2)
        .name('invertDirectionZ')
        .listen();
    }
  }
  changeAngle(newAngleName) {
    const angleZoom = `${newAngleName}Zoom`;
    if (!this.angle[newAngleName] && !this.angle[angleZoom]) {
      throw new Error('Invalid angle');
    }
    gsap.to(this.angle.value, { ...this.angle[newAngleName], duration: 2 });
    gsap.to(this.angle.zoom, { ...{ value: this.angle[angleZoom] }, duration: 2 });
  }
  setControls() {
    this.controls = new OrbitControls(this.instance, this.canvas);
    this.controls.enableDamping = true;
  }
  setInstance() {
    this.instance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 200);
    this.instance.up.set(0, 0, 1);
    this.instance.position.copy(this.angle.value);
    this.instance.lookAt(new THREE.Vector3());
    // this.container.add(this.instance);

    this.time.on('tick', () => {
      this.targetEased.x += (this.target.x - this.targetEased.x) * this.easing;
      this.targetEased.y += (this.target.y - this.targetEased.y) * this.easing;
      this.targetEased.z += (this.target.z - this.targetEased.z) * this.easing;

      this.instance.position
        .copy(this.targetEased)
        .add(this.angle.value.clone().normalize().multiplyScalar(this.angle.zoom.value));
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
