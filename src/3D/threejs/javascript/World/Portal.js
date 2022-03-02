import World from './World';
import * as THREE from 'three';
import EventEmitter from '../Utils/EventEmitter';

export default class Portal extends EventEmitter {
  constructor(position, url, sizes) {
    super();
    this.world = new World();
    this.mainHero = this.world.mainHero;
    this.time = this.world.time;
    this.url = url;
    this.position = position;

    this.container = new THREE.Object3D();
    this.container.position.x = this.position.x;
    this.container.position.y = this.position.y;
    this.container.position.z = 0.1;
    this.container.matrixAutoUpdate = false;
    this.container.updateMatrix();

    this.skateIsInArea = false;
    this.sizes =
      sizes?.x && sizes?.y
        ? sizes
        : {
            x: 3,
            y: 3,
          };
    this.elapsedTimeInPortal = 0;

    this.setPortal();
    this.setTimer();
    this.setVisibleTimer();
    this.observeSkate();
  }

  setPortal() {
    this.portal = {
      geometry: new THREE.PlaneGeometry(this.sizes.x, this.sizes.y),
      material: new THREE.MeshBasicMaterial({ color: 0xffffff }),
    };
    this.portal.mesh = new THREE.Mesh(this.portal.geometry, this.portal.material);

    this.container.add(this.portal.mesh);
  }

  setTimer() {
    this.time.on('tick', () => {
      if (this.elapsedTimeInPortal > 100) {
        this.redirect();
      } else if (this.skateIsInArea) {
        this.elapsedTimeInPortal += this.time.delta / 30;
        if (this.visibleTimer._element.style.opacity === '0') {
          this.visibleTimer._element.style.opacity = '1';
        }
      } else if (this.elapsedTimeInPortal > 0) {
        this.elapsedTimeInPortal -= this.time.delta / 30;
      } else {
        this.visibleTimer._element.style.opacity = '0';
      }
      this.visibleTimer._element.style.width = `${this.elapsedTimeInPortal / 1.5}%`;
    });
  }
  redirect() {
    window.location = this.url;
  }
  observeSkate() {
    this.time.on('tick', () => {
      const skateIsIn =
        Math.abs(this.mainHero.position.x - this.position.x) < Math.abs(this.sizes.x / 2) &&
        Math.abs(this.mainHero.position.y - this.position.y) < Math.abs(this.sizes.y / 2);
      if (skateIsIn !== this.skateIsInArea) {
        this.skateIsInArea = skateIsIn;
      }
    });
  }
  setVisibleTimer() {
    this.visibleTimer = {};
    this.visibleTimer._element = document.createElement('div');
    this.visibleTimer._element.style = {
      position: 'fixed',
      userSelect: 'none',
      width: '70%',
      height: '10px',
      opacity: 0,
      transition: '1s',
    };
    this.visibleTimer._element.style.userSelect = 'none';
    this.visibleTimer._element.style.position = 'fixed';
    this.visibleTimer._element.style.background = '#ff9933';
    this.visibleTimer._element.style.borderRadius = '5px';
    this.visibleTimer._element.style.border = '1px solid black';
    this.visibleTimer._element.style.top = '50px';
    this.visibleTimer._element.style.left = '50%';
    this.visibleTimer._element.style.transform = 'translate(-50%, 0)';
    this.visibleTimer._element.style.height = '10px';
    this.visibleTimer._element.style.transition = '1s';
    this.visibleTimer._element.style.opacity = '0';
    document.body.appendChild(this.visibleTimer._element);
  }
}
