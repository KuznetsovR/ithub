import * as THREE from 'three';
import Portal from './Portal';
import PortalTimer from './PortalTimer';

export default class Portals {
  constructor() {
    this.container = new THREE.Object3D();
    this.container.matrixAutoUpdate = false;
    this.timer = new PortalTimer()
  }
  add(name, position, url, size = 6) {
    const portal = new Portal(name, position, url, size, this.timer);

    this.container.add(portal.container);
    return portal;
  }
}
