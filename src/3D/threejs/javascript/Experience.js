import * as THREE from 'three';
import Sizes from './Utils/Sizes';
import Camera from "./Camera";
import Renderer from "./Renderer";
import World from "./World/World";
import Time from "./Utils/Time";
import Debug from "./Utils/Debug";
import sources from "./sources";
import Resources from "./Utils/Resources";

let instance = null;

export default class Experience {
  constructor(canvas) {
    if (instance) {
      return instance;
    }
    instance = this;
    this.canvas = canvas
    this.debug = new Debug()
    this.sizes = new Sizes()
    this.time = new Time()
    this.scene = new THREE.Scene()
    this.resources = new Resources(sources)
    this.camera = new Camera()
    this.renderer = new Renderer()
    this.world = new World()
    this.sizes.on('resize', ()=>{
      this.resize()
    })
    this.time.on('tick', ( ) =>{
      this.update()
    })
    this.resources.on('ready', () => {
      this.canvas.classList.add('ready')
    })
  }
  resize(){
    this.camera.resize()
    this.renderer.resize()
  }
  update(){
    this.camera.update()
    this.renderer.update()
  }
}
