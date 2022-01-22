import Experience from './Experience';
import * as THREE from 'three';

export default class Camera {
  experience = new Experience();
  sizes = this.experience.sizes;
  scene = this.experience.scene;
  canvas = this.experience.canvas;
  constructor() {
    this.setInstance()
  }
  setInstance() {
    this.instance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100);
    this.instance.position.set(6, 4, 8);
    this.scene.add(this.instance);
  }
  resize(){
    this.instance.aspect = this.sizes.width / this.sizes.height
    this.instance.updateProjectionMatrix()
  }
}
