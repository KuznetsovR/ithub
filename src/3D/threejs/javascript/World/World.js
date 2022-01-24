import Experience from '../Experience';
import * as THREE from 'three';

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.scene.add(new THREE.Mesh({
      geometry: new THREE.SphereGeometry(1, 15, 15),
      material: new THREE.MeshBasicMaterial({ color: 0x6600ff, wireframe: true }),
    }));
    // this.resources = this.experience.resources
  }
}
