import * as THREE from 'three'

import EventEmitter from '../../Utils/EventEmitter';

export default class Zone extends EventEmitter{
  constructor(position, size) {
    super();
    this.position = position
    this.size = size

    // Set up
    this.isIn = false

    // Mesh
    this.mesh = new THREE.Mesh(
      new THREE.BoxBufferGeometry(size.x, size.y, 3, 1, 1, 1),
      new THREE.MeshBasicMaterial({ color: 0xff00ff, wireframe: true })
    )
    this.mesh.position.x = position.x
    this.mesh.position.y = position.y
    this.mesh.position.z = 1.5
  }

}
