import Experience from '../Experience';
import * as THREE from 'three';

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    const geometry = new THREE.SphereGeometry(1, 15, 15);
    const material = new THREE.MeshBasicMaterial({ color: 0x6600ff, wireframe: true });
    const mesh = new THREE.Mesh(geometry, material);

    this.scene.add(mesh);
    // this.resources = this.experience.resources
  }
}
