import Experience from '../Experience';
import * as THREE from 'three';
import Floor from './Floor';

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    const geometry = new THREE.SphereBufferGeometry(5);
    const material = new THREE.MeshBasicMaterial({
      color: 0xff0782,
      wireframe: true,
    });
    const mesh = new THREE.Mesh(geometry, material);
    this.scene.add(mesh)
    this.setFloor();
  }
  setFloor() {
    this.floor = new Floor();
    this.scene.add(this.floor.container);
  }
}
