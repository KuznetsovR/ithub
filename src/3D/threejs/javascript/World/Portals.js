import * as THREE from 'three';
import Portal from './Portal';

export default class Portals{
  constructor() {
    this.items = []
    this.container = new THREE.Object3D()
    this.container.matrixAutoUpdate = false
  }
  add(position, url, sizes){
    const portal = new Portal(position,url, sizes)

    this.container.add(portal.container)
    this.items.push(portal)

    return portal
  }
}
