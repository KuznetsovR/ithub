import * as THREE from 'three';
import World from './World';

export default class Map {
  world = new World();
  resources = this.world.resources;
  objects = this.world.objects;
  time = this.world.time;
  debug = this.world.debug;

  constructor() {
    this.container = new THREE.Object3D()
    this.container.matrixAutoUpdate = false
    this.setStatic();
    this.setLight()
  }
  setStatic() {
    this.objects.add({
      base: this.resources.items.MapModel.scene,
      collision: this.resources.items.MainMapCollision.scene,
      floorShadowTexture: this.resources.items.MainMapFloorShadow,
      offset: new THREE.Vector3(0, 0, 0),
      mass: 0,
    });
  }
  setLight() {
    const light = new THREE.AmbientLight( 0x404040 ); // soft white light
    this.container.add( light );
  }
}
