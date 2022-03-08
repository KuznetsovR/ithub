import * as THREE from 'three';
import World from './World';

export default class MainHero {
  world = new World();
  resources = this.world.resources;
  objects = this.world.objects;
  physics = this.world.physics;
  shadows = this.world.shadows;
  debug = this.world.debug;
  time = this.world.time;

  container = new THREE.Object3D();
  position = new THREE.Vector3();

  constructor() {
    if (this.debug.active) {
      this.debugFolder = this.debug.addFolder('skate');
    }

    this.setModel();
    this.setMovement();
    this.setSkate();
    this.setMainHero();
    this.setAnimations();
  }
  setModel() {
    this.model = {
      skate: this.resources.items.SkateModel,
      mainHero: this.resources.items.MainHero,
    };
  }
  setMovement() {
    this.movement = {
      speed: new THREE.Vector3(),
      localSpeed: new THREE.Vector3(),
      acceleration: new THREE.Vector3(),
      localAcceleration: new THREE.Vector3(),
    };

    this.time.on('tick', () => {
      const movementSpeed = new THREE.Vector3();
      movementSpeed.copy(this.skate.object.position).sub(this.skate.oldPosition);
      this.movement.acceleration = movementSpeed.clone().sub(this.movement.speed);
      this.movement.speed.copy(movementSpeed);
      this.movement.localSpeed = this.movement.speed
        .clone()
        .applyAxisAngle(new THREE.Vector3(0, 0, 1), -this.skate.object.rotation.z);
      this.movement.localAcceleration = this.movement.acceleration
        .clone()
        .applyAxisAngle(new THREE.Vector3(0, 0, 1), -this.skate.object.rotation.z);
    });
  }
  setSkate() {
    this.skate = {};
    this.skate.offset = new THREE.Vector3(0, 0, -0.28);
    this.skate.object = this.objects.getConvertedMesh(this.model.skate.scene.children);
    this.skate.object.position.copy(this.physics.skate.chassis.body.position);
    this.skate.oldPosition = this.skate.object.position.clone();
    this.container.add(this.skate.object);

    this.shadows.add(this.skate.object, { sizeX: 2.4, sizeY: 1, offsetZ: 0.2 });

    // Time tick
    this.time.on('tick', () => {
      // Save old position for movement calculation
      this.skate.oldPosition = this.skate.object.position.clone();

      this.skate.object.position.copy(this.physics.skate.chassis.body.position).add(this.skate.offset);
      this.skate.object.quaternion.copy(this.physics.skate.chassis.body.quaternion);

      // Update position
      this.position.copy(this.skate.object.position);
    });
  }
  setMainHero() {
    this.mainHero = {};
    this.mainHero.offset = new THREE.Vector3(0, 0, 0);
    this.mainHero.object = this.model.mainHero.scene;
    this.container.add(this.mainHero.object);

    // Time tick
    this.time.on('tick', () => {
      this.mainHero.oldPosition = this.mainHero.object.position.clone();
      this.mainHero.object.position.copy(this.physics.skate.chassis.body.position).add(this.mainHero.offset);
      this.mainHero.object.quaternion.copy(this.physics.skate.chassis.body.quaternion);
    });
  }
  setAnimations() {
    this.mixer = new THREE.AnimationMixer(this.container);
    this.mainHeroAction = this.mixer.clipAction(this.model.mainHero.animations[1]);
    this.mainHeroAction.play();
    this.time.on('tick', () => {
      if(this.mixer){
        this.mixer.update(this.time.delta / 1000)  // we divide by 1000 because time.delta is in ms
      }
    });
  }
}
