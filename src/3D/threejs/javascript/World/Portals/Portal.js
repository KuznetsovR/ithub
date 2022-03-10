import World from '../World';
import * as THREE from 'three';
import EventEmitter from '../../Utils/EventEmitter';

export default class Portal extends EventEmitter {
  constructor(name, position, url, size, timer) {
    super();
    this.world = new World();
    this.mainHero = this.world.mainHero;
    this.time = this.world.time;

    this.url = url;
    this.position = position;
    this.size = size;
    this.name = name;
    this.timer = timer;

    this.container = new THREE.Object3D();
    this.container.position.x = this.position.x;
    this.container.position.y = this.position.y;
    this.container.position.z = 0.1;
    this.container.matrixAutoUpdate = false;
    this.container.updateMatrix();

    this.skateIsInArea = false;
    this.elapsedTimeInPortal = 0;

    this.setPortal();
    this.setTimer();
    this.observeSkate();
  }

  setPortal() {
    this.portal = {
      geometry: new THREE.CircleGeometry(this.size / 2, 6),
      material: new THREE.MeshBasicMaterial({ color: 0x9e3169 }),
    };
    this.portal.mesh = new THREE.Mesh(this.portal.geometry, this.portal.material);

    this.container.add(this.portal.mesh);
  }

  setTimer() {
    this.time.on('tick', () => {
      if (this.timer.currentPortal === null || this.timer.currentPortal === this.name) {
        if (this.elapsedTimeInPortal > 100) {
          this.redirect();
        } else if (this.skateIsInArea) {
          this.timer.setCurrentPortal(this.name);
          this.elapsedTimeInPortal += this.time.delta / 30;

          // console.log(
          //   'X: ',
          //   Math.abs(this.mainHero.position.x ),
          //   Math.abs(this.position.x),
          //   'Y: ',
          //   Math.abs(this.mainHero.position.y),
          //   Math.abs(this.position.y),
          // );

          this.timer.makeTimerVisible();
        } else if (this.elapsedTimeInPortal > 0) {
          this.elapsedTimeInPortal -= this.time.delta / 30;
        } else {
          this.timer.setCurrentPortal(null);
          this.timer.makeTimerInvisible();
        }
        this.timer.setTimerWidth(this.elapsedTimeInPortal / 1.5);
      }
    });
  }
  redirect() {
    window.location = this.url;
  }
  observeSkate() {
    this.time.on('tick', () => {
      const skateIsIn =
        Math.abs(this.mainHero.position.x - this.position.x) < Math.abs(this.size / 2) &&
        Math.abs(this.mainHero.position.y - this.position.y) < Math.abs(this.size / 2);
      if (skateIsIn !== this.skateIsInArea) {
        this.skateIsInArea = skateIsIn;
      }
    });
  }
}
