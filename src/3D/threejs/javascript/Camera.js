import Experience from './Experience';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default class Camera {
  experience = new Experience();
  sizes = this.experience.sizes;
  scene = this.experience.scene;
  canvas = this.experience.canvas;
  debug = this.experience.debug;
  time = this.experience.time;
  constructor() {
    this.target = new THREE.Vector3(0, 0, 0)
    this.targetEased = new THREE.Vector3(0, 0, 0)
    this.easing = 0.15

    this.setInstance();
    this.setControls();
    this.setPan();
  }
  setControls() {
    this.controls = new OrbitControls(this.instance, this.canvas);
    this.controls.enableDamping = true;
  }
  setInstance() {
    this.instance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100);
    this.angle = new THREE.Vector3(6, 4, 8);
    this.instance.position.copy(this.angle);
    this.scene.add(this.instance);

    this.time.on('tick', () => {
      this.targetEased.x += (this.target.x - this.targetEased.x) * this.easing;
      this.targetEased.y += (this.target.y - this.targetEased.y) * this.easing;
      this.targetEased.z += (this.target.z - this.targetEased.z) * this.easing;

      // Look at target
      this.instance.lookAt(this.targetEased);

      // Apply pan
      this.instance.position.x += this.pan.value.x;
      this.instance.position.y += this.pan.value.y;
    });
  }
  setPan() {
    this.pan = {};
    this.pan.enabled = false;
    this.pan.easing = 0.1;
    this.pan.value = {
      x: 0,
      y: 0,
    };
    this.pan.targetValue = {
      x: 0,
      y: 0,
    };

    this.pan.reset = () => {
      this.pan.targetValue.x = 0;
      this.pan.targetValue.y = 0;
    };

    this.pan.enable = () => {
      this.pan.enabled = true;
    };

    this.pan.disable = () => {
      this.pan.enabled = false;
    };

    this.time.on('tick', () => {
      // Update value and apply easing
      this.pan.value.x += (this.pan.targetValue.x - this.pan.value.x) * this.pan.easing;
      this.pan.value.y += (this.pan.targetValue.y - this.pan.value.y) * this.pan.easing;
    });
  }

  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height;
    this.instance.updateProjectionMatrix();
  }
  update() {
    this.controls.update();
  }
}
