import * as THREE from 'three';
import Experience from '../Experience';

export default class Map {
  experience = new Experience();
  scene = this.experience.scene;
  resources = this.experience.resources;
  time = this.experience.time;
  debug = this.experience.debug;
  constructor() {
    this.resource = this.resources.items.MapModel;
    this.setModel()
  }
  setModel() {
    const light = new THREE.AmbientLight( 0x404040 ); // soft white light
    this.scene.add( light );
    this.model = this.resource.scene;
    this.scene.add(this.model);
  }
}
