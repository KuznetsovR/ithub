import Experience from '../Experience';
import * as CANNON from 'cannon-es';
import * as THREE from 'three';
export default class Physics {
  experience = new Experience();
  time = this.experience.time;
  controls = this.experience.controls;
  debug = this.experience.debug;

  constructor() {
    if (this.debug) {
      this.debugFolder = this.debug.addFolder('physics');
    }

    this.setWorld();
    this.setModels();
    this.setMaterials();
    this.time.on('tick', () => {
      this.world.step(1 / 60, this.time.delta, 3);
    });
  }
  setWorld() {
    this.world = new CANNON.World();
    this.world.gravity.set(0, 0, -3.25);
    this.world.allowSleep = true;
    this.world.defaultContactMaterial.friction = 0;
    this.world.defaultContactMaterial.restitution = 0.2;

    if (this.debug) {
      this.debugFolder.add(this.world.gravity, 'z').step(0.001).min(-20).max(20).name('gravity');
    }
  }
  setModels() {
    this.models = {};
    this.models.container = new THREE.Object3D();
    this.models.container.visible = false;
    this.models.materials = {};
    this.models.materials.static = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true });
    this.models.materials.dynamic = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
    this.models.materials.dynamicSleeping = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true });

    if(this.debug)
    {
      this.debugFolder.add(this.models.container, 'visible').name('modelsVisible')
    }
  }
  setMaterials() {
    this.materials = {};

    // All materials
    this.materials.items = {};
    this.materials.items.floor = new CANNON.Material('floorMaterial');
    this.materials.items.dummy = new CANNON.Material('dummyMaterial');
    // this.materials.items.wheel = new CANNON.Material('wheelMaterial')

    // Contact between materials
    this.materials.contacts = {};

    this.materials.contacts.floorDummy = new CANNON.ContactMaterial(
      this.materials.items.floor,
      this.materials.items.dummy,
      { friction: 0.05, restitution: 0.3, contactEquationStiffness: 1000 }
    );
    this.world.addContactMaterial(this.materials.contacts.floorDummy);

    this.materials.contacts.dummyDummy = new CANNON.ContactMaterial(
      this.materials.items.dummy,
      this.materials.items.dummy,
      { friction: 0.5, restitution: 0.3, contactEquationStiffness: 1000 }
    );
    this.world.addContactMaterial(this.materials.contacts.dummyDummy);

    //
    // this.materials.contacts.floorWheel = new CANNON.ContactMaterial(
    //   this.materials.items.floor,
    //   this.materials.items.wheel,
    //   { friction: 0.3, restitution: 0, contactEquationStiffness: 1000 }
    // );
    // this.world.addContactMaterial(this.materials.contacts.floorWheel);
  }


  setFloor() {
    this.floor = {};
    this.floor.body = new CANNON.Body({
      mass: 0,
      shape: new CANNON.Plane(),
      material: this.materials.items.floor,
    });

    this.world.addBody(this.floor.body);
  }
  setSkate() {
    this.skate = {
      steering: 0,
      accelerating: 0,
      speed: 0,
      worldForward: new CANNON.Vec3(),
      angle: 0,
      forwardSpeed: 0,
      oldPosition: new CANNON.Vec3(),
      goingForward: true,
    };

    this.skate.options = {
      // width:
    };
  }
}
