import Experience from '../Experience';
import Floor from './Floor';
import Map from './Map'

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.resources.on('ready', ()=>{
      this.map = new Map();
      this.setFloor();
    })
  }
  setFloor() {
    this.floor = new Floor();
    this.scene.add(this.floor.container);
  }
}
