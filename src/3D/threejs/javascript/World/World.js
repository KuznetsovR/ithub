import Experience from '../Experience';
import Floor from './Floor';
import Map from './Map';
import * as THREE from 'three';

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.shadows = this.experience.shadows;

    this.container = new THREE.Object3D();
    this.container.matrixAutoUpdate = false;

    this.resources.on('ready', () => {
      this.map = new Map();
      this.createWorld();
      const skate = this.resources.items.SkateModel.scenes[0];
      skate.position.y = 4;
      this.scene.add(skate);
    });
  }
  createWorld() {
    this.setShadows();
    this.setFloor();
  }
  setShadows() {
    this.container.add(this.shadows.container);
  }
  setFloor() {
    this.floor = new Floor();
    this.scene.add(this.floor.container);
  }
}
