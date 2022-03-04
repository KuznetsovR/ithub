import * as THREE from 'three';
import World from './World';

export default class Map {
  world = new World();
  resources = this.world.resources;
  objects = this.world.objects;
  portals = this.world.portals;

  constructor() {
    this.container = new THREE.Object3D();
    this.container.matrixAutoUpdate = false;
    this.setStatic();
    this.setDynamic();
    this.setPortals();
  }
  setStatic() {
    this.objects.add({
      base: this.resources.items.MapModel.scene,
      collision: this.resources.items.MainMapCollision.scene,
      floorShadowTexture: this.resources.items.MainMapFloorShadow,
      offset: new THREE.Vector3(0, 0, 0),
      mass: 0,
    });
    this.objects.add({
      base: this.resources.items.IthubEkatText.scene,
      collision: this.resources.items.IthubEkatCollision.scene,
      floorShadowTexture: this.resources.items.MainMapFloorShadow,
      offset: new THREE.Vector3(0, 0, 0),
      mass: 0,
    });
    this.objects.add({
      base: this.resources.items.htmlCode.scene,
      collision: this.resources.items.htmlCodeCollision.scene,
      floorShadowTexture: this.resources.items.MainMapFloorShadow,
      offset: new THREE.Vector3(0, 0, 0),
      mass: 0,
    });
    this.objects.add({
      base: this.resources.items.jsCode.scene,
      collision: this.resources.items.jsCodeCollision.scene,
      floorShadowTexture: this.resources.items.MainMapFloorShadow,
      offset: new THREE.Vector3(0, 0, 0),
      mass: 0,
    });
    this.objects.add({
      base: this.resources.items.adressText.scene,
      collision: this.resources.items.adressTextCollision.scene,
      floorShadowTexture: this.resources.items.MainMapFloorShadow,
      offset: new THREE.Vector3(4, 0, 0),
      rotation: new THREE.Euler(0, 0, 0),
      mass: 0,
    });
  }
  setDynamic() {
    this.objects.add({
      base: this.resources.items.Ps4.scene,
      collision: this.resources.items.Ps4Collision.scene,
      offset: new THREE.Vector3(0, 0, 0),
      rotation: new THREE.Euler(0, 0, 0),
      shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: - 0.6, alpha: 0.4 },
      mass: 1.8,
    })
    this.objects.add({
      base: this.resources.items.cText.scene,
      collision: this.resources.items.cCollision.scene,
      offset: new THREE.Vector3(0, 0, 0),
      rotation: new THREE.Euler(0, 0, 0),
      shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: -0.6, alpha: 0.4 },
      mass: 0.7,
    });
    this.objects.add({
      base: this.resources.items.sText.scene,
      collision: this.resources.items.sCollision.scene,
      offset: new THREE.Vector3(0, 0, 0),
      rotation: new THREE.Euler(0, 0, 0),
      shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: -0.6, alpha: 0.4 },
      mass: 0.7,
    });
    this.objects.add({
      base: this.resources.items.sText.scene,
      collision: this.resources.items.sCollision.scene,
      offset: new THREE.Vector3(0.7, -0.4, 0),
      rotation: new THREE.Euler(0, 0, 0),
      shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: -0.6, alpha: 0.4 },
      mass: 0.7,
    });
    this.objects.add({
      base: this.resources.items.HText.scene,
      collision: this.resources.items.HCollision.scene,
      offset: new THREE.Vector3(0, 0, 0),
      rotation: new THREE.Euler(0, 0, 0),
      shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: -0.6, alpha: 0.4 },
      mass: 0.7,
    });
    this.objects.add({
      base: this.resources.items.TText.scene,
      collision: this.resources.items.TCollision.scene,
      offset: new THREE.Vector3(0, 0, 0),
      rotation: new THREE.Euler(0, 0, 0),
      shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: -0.6, alpha: 0.4 },
      mass: 0.7,
    });
    this.objects.add({
      base: this.resources.items.MText.scene,
      collision: this.resources.items.MCollision.scene,
      offset: new THREE.Vector3(0, 0, 0),
      rotation: new THREE.Euler(0, 0, 0),
      shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: -0.6, alpha: 0.4 },
      mass: 0.7,
    });
    this.objects.add({
      base: this.resources.items.LText.scene,
      collision: this.resources.items.LCollision.scene,
      offset: new THREE.Vector3(0, 0, 0),
      rotation: new THREE.Euler(0, 0, 0),
      shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: -0.6, alpha: 0.4 },
      mass: 0.7,
    });
    this.objects.add({
      base: this.resources.items.JText.scene,
      collision: this.resources.items.JCollision.scene,
      offset: new THREE.Vector3(0, 0, 0),
      rotation: new THREE.Euler(0, 0, 0),
      shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: -0.6, alpha: 0.4 },
      mass: 0.7,
    });
    this.objects.add({
      base: this.resources.items.sText.scene,
      collision: this.resources.items.sCollision.scene,
      offset: new THREE.Vector3(-6.2, -10.7, 0),
      rotation: new THREE.Euler(0, 0, 0),
      shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: -0.6, alpha: 0.4 },
      mass: 0.7,
    });
    this.objects.add({
      base: this.resources.items.JText.scene,
      collision: this.resources.items.JCollision.scene,
      offset: new THREE.Vector3(5.8, -0.79, 0),
      rotation: new THREE.Euler(0, 0, 1),
      shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: -0.6, alpha: 0.4 },
      mass: 0.7,
    });
    this.objects.add({
      base: this.resources.items.AText.scene,
      collision: this.resources.items.ACollision.scene,
      offset: new THREE.Vector3(0, 0, 0),
      rotation: new THREE.Euler(0, 0, 0),
      shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: -0.6, alpha: 0.4 },
      mass: 0.7,
    });
    this.objects.add({
      base: this.resources.items.VText.scene,
      collision: this.resources.items.VCollision.scene,
      offset: new THREE.Vector3(0, 0, 0),
      rotation: new THREE.Euler(0, 0, 0),
      shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: -0.6, alpha: 0.4 },
      mass: 0.7,
    });
    this.objects.add({
      base: this.resources.items.AText.scene,
      collision: this.resources.items.ACollision.scene,
      offset: new THREE.Vector3(1.2, 0.65, 0),
      rotation: new THREE.Euler(0, 0, 0),
      shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: -0.6, alpha: 0.4 },
      mass: 0.7,
    });
  }
  setPortals() {
    this.documentsPortal = this.portals.add({ x: 45.2256, y: 26.6675 }, '/#documents');
    this.commissionPortal = this.portals.add({ x: -42.5098, y: 30.511 }, '/commission');
    this.reviewsPortal = this.portals.add({ x: 42.412, y: -24.8583 }, '/#reviews');
    this.coursesPortal = this.portals.add({ x: -45.6849, y: -20.8606 }, '/courses');
    this.specialtiesPortal = this.portals.add({ x: 2.73161, y: 52.8746 }, '/#specialities');
  }
}
