import * as THREE from 'three';
import World from './World';

export default class Map {
  world = new World();
  container = this.world.container;
  resources = this.world.resources;
  time = this.world.time;
  debug = this.world.debug;

  constructor() {
    this.resource = this.resources.items.MapModel;
    this.setModel()
  }
  setModel() {
    const light = new THREE.AmbientLight( 0x404040 ); // soft white light
    this.container.add( light );
    this.model = this.resource.scene;
    this.container.add(this.model);
  }
}
