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
    this.setDynamic()
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
  setDynamic(){
    this.objects.add({
      base: this.resources.items.IThubText.scene,
      collision: this.resources.items.IThubTextCollision.scene,
      offset: new THREE.Vector3(0, 0, 0),
      rotation: new THREE.Euler(0, 0, 0),
      shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: - 0.6, alpha: 0.4 },
      mass: 0.7,
      
    })
    this.objects.add({
      base: this.resources.items.EkatText.scene,
      collision: this.resources.items.EkatTextCollision.scene,
      offset: new THREE.Vector3(0, 0, 0),
      rotation: new THREE.Euler(0, 0, 0),
      shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: - 0.6, alpha: 0.4 },
      mass: 0.7,
    })
  }
}
