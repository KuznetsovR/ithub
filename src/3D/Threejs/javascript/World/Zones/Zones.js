import * as THREE from 'three';

import Zone from './Zone';
import World from '../World';

export default class Zones {
  world = new World();
  time = this.world.time;
  physics = this.world.physics;
  constructor() {
    this.container = new THREE.Object3D();
    this.container.visible = false;
    this.container.matrixAutoUpdate = false;
    this.setItems()
  }
  setItems() {
    this.items = [];

    this.time.on('tick', () => {
      for (const zone of this.items) {
        const isIn =
          this.physics.skate.chassis.body.position.x < zone.position.x + zone.size.x / 2 &&
          this.physics.skate.chassis.body.position.x > zone.position.x - zone.size.x / 2 &&
          this.physics.skate.chassis.body.position.y < zone.position.y + zone.size.y / 2 &&
          this.physics.skate.chassis.body.position.y > zone.position.y - zone.size.y / 2;

        if (isIn && !zone.isIn) {
          zone.trigger('in');
        } else if (!isIn && zone.isIn) {
          zone.trigger('out');
        }
        zone.isIn = isIn;
      }
    });
  }
  add(position, size) {
    const zone = new Zone(position, size);
    this.container.add(zone.mesh);

    this.items.push(zone);
    return zone;
  }
}
