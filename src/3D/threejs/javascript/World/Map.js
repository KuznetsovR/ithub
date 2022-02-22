import * as THREE from 'three';
import World from './World';

export default class Map {
  world = new World();
  resources = this.world.resources;
  objects = this.world.objects;

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
      base: this.resources.items.cText.scene,
      collision: this.resources.items.cCollision.scene,
      offset: new THREE.Vector3(0, 0, 0),
      rotation: new THREE.Euler(0, 0, 0),
      shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: - 0.6, alpha: 0.4 },
      mass: 0.7,
    })
    this.objects.add({
      base: this.resources.items.sText.scene,
      collision: this.resources.items.sCollision.scene,
      offset: new THREE.Vector3(0, 0, 0),
      rotation: new THREE.Euler(0, 0, 0),
      shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: - 0.6, alpha: 0.4 },
      mass: 0.7,
    })
    this.objects.add({
      base: this.resources.items.sText.scene,
      collision: this.resources.items.sCollision.scene,
      offset: new THREE.Vector3(0.7, -0.4, 0),
      rotation: new THREE.Euler(0, 0, 0),
      shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: - 0.6, alpha: 0.4 },
      mass: 0.7,
    })
    this.objects.add({
      base: this.resources.items.HText.scene,
      collision: this.resources.items.HCollision.scene,
      offset: new THREE.Vector3(0, 0, 0),
      rotation: new THREE.Euler(0, 0, 0),
      shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: - 0.6, alpha: 0.4 },
      mass: 0.7,
    })
    this.objects.add({
      base: this.resources.items.TText.scene,
      collision: this.resources.items.TCollision.scene,
      offset: new THREE.Vector3(0, 0, 0),
      rotation: new THREE.Euler(0, 0, 0),
      shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: - 0.6, alpha: 0.4 },
      mass: 0.7,
    })
    this.objects.add({
      base: this.resources.items.MText.scene,
      collision: this.resources.items.MCollision.scene,
      offset: new THREE.Vector3(0, 0, 0),
      rotation: new THREE.Euler(0, 0, 0),
      shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: - 0.6, alpha: 0.4 },
      mass: 0.7,
    })
    this.objects.add({
      base: this.resources.items.LText.scene,
      collision: this.resources.items.LCollision.scene,
      offset: new THREE.Vector3(0, 0, 0),
      rotation: new THREE.Euler(0, 0, 0),
      shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: - 0.6, alpha: 0.4 },
      mass: 0.7,
    })
    this.objects.add({
      base: this.resources.items.JText.scene,
      collision: this.resources.items.JCollision.scene,
      offset: new THREE.Vector3(0, 0, 0),
      rotation: new THREE.Euler(0, 0, 0),
      shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: - 0.6, alpha: 0.4 },
      mass: 0.7,
    })
    this.objects.add({
      base: this.resources.items.sText.scene,
      collision: this.resources.items.sCollision.scene,
      offset: new THREE.Vector3(-6.2, -10.7, 0),
      rotation: new THREE.Euler(0, 0, 0),
      shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: - 0.6, alpha: 0.4 },
      mass: 0.7,
    })
    this.objects.add({
      base: this.resources.items.JText.scene,
      collision: this.resources.items.JCollision.scene,
      offset: new THREE.Vector3(5.8, -0.79, 0),
      rotation: new THREE.Euler(0, 0, 1),
      shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: - 0.6, alpha: 0.4 },
      mass: 0.7,
    })
    this.objects.add({
      base: this.resources.items.AText.scene,
      collision: this.resources.items.ACollision.scene,
      offset: new THREE.Vector3(0, 0, 0),
      rotation: new THREE.Euler(0, 0, 0),
      shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: - 0.6, alpha: 0.4 },
      mass: 0.7,
    })
    this.objects.add({
      base: this.resources.items.VText.scene,
      collision: this.resources.items.VCollision.scene,
      offset: new THREE.Vector3(0, 0, 0),
      rotation: new THREE.Euler(0, 0, 0),
      shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: - 0.6, alpha: 0.4 },
      mass: 0.7,
    })
    this.objects.add({
      base: this.resources.items.AText.scene,
      collision: this.resources.items.ACollision.scene,
      offset: new THREE.Vector3(1.4, 0.8, 0),
      rotation: new THREE.Euler(0, 0, 0),
      shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: - 0.6, alpha: 0.4 },
      mass: 0.7,
    })
  }
}
