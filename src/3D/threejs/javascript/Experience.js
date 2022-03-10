import * as THREE from 'three';
import Sizes from './Utils/Sizes';
import Camera from './Camera';
import Renderer from './Renderer';
import World from './World/World';
import Time from './Utils/Time';
import Debug from './Utils/Debug';
import sources from './sources';
import Resources from './Utils/Resources';

let instance = null;

export default class Experience {
  constructor(canvas) {
    if (canvas) instance = null
    if (instance) {
      return instance;
    }
    instance = this;
    this.canvas = canvas;
    this.scene = new THREE.Scene();
    this.debug = new Debug();
    this.sizes = new Sizes();
    this.time = new Time();
    this.resources = new Resources(sources);

    this.setCamera();
    this.renderer = new Renderer();

    this.world = new World(true);

    this.scene.add(this.world.container);

    this.sizes.on('resize', () => {
      this.resize();
    });
    this.time.on('tick', () => {
      this.update();
    });
    this.resources.on('ready', () => {
      this.canvas.classList.add('ready');
    });
  }

  setCamera() {
    this.camera = new Camera();
    // this.scene.add(this.camera.container)
    this.time.on('tick', () => {
      if (this.world && this.world.mainHero) {
        this.camera.target.x = this.world.mainHero.skate.object.position.x;
        this.camera.target.y = this.world.mainHero.skate.object.position.y;
      }
    });
  }
  resize() {
    this.camera.resize();
    this.renderer.resize();
  }
  update() {
    this.camera.update();
    this.renderer.update();
  }
}
