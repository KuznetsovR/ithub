import * as THREE from 'three';

export default class Lights {
  constructor() {
    this.container = new THREE.Object3D();
    this.container.matrixAutoUpdate = false;
    this.setAmbientLight();
    this.setPointLight();
  }
  setAmbientLight() {
    const light = new THREE.AmbientLight(0xffffff);
    this.container.add(light);
  }
  setPointLight() {
    const pointLight = new THREE.PointLight(0xffffff, 1, 1000, 0.001);
    pointLight.position.set(0, 0, 20);
    this.container.add(pointLight);
  }
}
