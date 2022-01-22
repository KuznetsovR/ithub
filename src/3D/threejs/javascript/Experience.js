import * as THREE from 'three';
import Sizes from './Utils/Sizes';
import Camera from "./Camera";
import Renderer from "./Renderer";

let instance = null;

export default class Experience {
  constructor(canvas) {
    if (instance) {
      return instance;
    }
    instance = this;
    this.canvas = canvas
    this.sizes = new Sizes()
    this.scene = new THREE.Scene()
    this.camera = new Camera()
    this.renderer = new Renderer()
  }
}
