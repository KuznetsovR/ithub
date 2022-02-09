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
    this.debug = this.experience.debug;
    this.sizes = this.experience.sizes;
    this.time = this.experience.time;
    this.resources = this.experience.resources;
    this.camera = this.experience.camera;
    this.renderer = this.experience.renderer;

    this.container = new THREE.Object3D();
    this.container.matrixAutoUpdate = false;

    this.controls = new Controls();
    this.setFloor();

    this.resources.on('ready', () => {
      this.createWorld();
      this.map = new Map()
      this.container.add(this.map.container)
    });
  }
  createWorld() {
    this.setMaterials();
    this.setShadows();
    this.setPhysics();
    this.setObjects();
    this.setMainHero();
  }
  setObjects() {
    this.objects = new Objects();
    this.container.add(this.objects.container)
  }
  setMaterials() {
    this.materials = new Materials();
  }
  setPhysics() {
    this.physics = new Physics();
    this.container.add(this.physics.models.container);
  }
  setMainHero() {
    this.mainHero = new MainHero();
    this.container.add(this.mainHero.container);
  }
  setShadows() {
    this.shadows = new Shadows();
    this.container.add(this.shadows.container);
  }
  setFloor() {
    this.floor = new Floor();
    this.container.add(this.floor.container);
  }
}
