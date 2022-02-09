import Experience from '../Experience';
import Floor from './Floor';
import Map from './Map';
import * as THREE from 'three';
import MainHero from './MainHero';
import Shadows from './Shadows';
import Materials from './Materials';
import Controls from './Controls';
import Physics from './Physics';
import Objects from './Objects';

let instance = null;

export default class World {
  constructor() {
    if (instance) {
      return instance;
    }
    instance = this;


    this.experience = new Experience();
    this.debug = this.experience.debug
    this.sizes = this.experience.sizes
    this.time = this.experience.time
    this.resources = this.experience.resources
    this.camera = this.experience.camera
    this.renderer = this.experience.renderer

    this.shadows = new Shadows();
    this.materials = new Materials();
    this.controls = new Controls();
    this.physics = new Physics();

    this.objects = new Objects();

    this.container = new THREE.Object3D();
    this.container.matrixAutoUpdate = false;

    this.resources.on('ready', () => {
      this.map = new Map();
      this.createWorld();
      this.mainHero = new MainHero();
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
    this.container.add(this.floor.container);
  }
}
