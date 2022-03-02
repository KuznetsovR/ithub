import * as THREE from 'three';

export default class Lights {
  constructor() {
    this.container = new THREE.Object3D();
    this.container.matrixAutoUpdate = false;
    this.setAmbientLight();
    this.setDirectionalLight();
  }
  setAmbientLight() {
    const light = new THREE.AmbientLight(0xffffff); // soft white light
    this.container.add(light);
  }
  setDirectionalLight() {
    const pointLight = new THREE.PointLight(0xffffff, 1, 1000, 0.001); // lights in every direction
    pointLight.position.set(1, 1, 20); // distance - where light disappears, decay - how fast light disappears
    const pointLightHelper = new THREE.PointLightHelper(pointLight, 1);
    this.container.add(pointLightHelper);
    this.container.add(pointLight);
  }
}
