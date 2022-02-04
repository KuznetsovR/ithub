import Experience from '../Experience';
import * as THREE from 'three';

export default class MainHero {
  experience = new Experience();
  resources = this.experience.resources;
  controls = this.experience.controls;
  time = this.experience.time;

  container = new THREE.Object3D();
  position = new THREE.Vector3();

  constructor() {
    this.setModel();
    this.setSkate()
    this.setMovement()
  }
  setModel() {
    this.model = {
      skate: this.resources.items,
    };
  }
  setSkate(){
    this.skate = {

    }
    // this.chassis = {}
    // this.chassis.offset = new THREE.Vector3(0, 0, - 0.28)
    // this.chassis.object = this.objects.getConvertedMesh(this.models.chassis.scene.children)
    // this.chassis.object.position.copy(this.physics.car.chassis.body.position)
    // this.chassis.oldPosition = this.chassis.object.position.clone()
    // this.container.add(this.chassis.object)
    //
    // this.shadows.add(this.chassis.object, { sizeX: 3, sizeY: 2, offsetZ: 0.2 })
    //
    // // Time tick
    // this.time.on('tick', () =>
    // {
    //   // Save old position for movement calculation
    //   this.chassis.oldPosition = this.chassis.object.position.clone()
    //
    //   // Update if mode physics
    //   if(!this.transformControls.enabled)
    //   {
    //     this.chassis.object.position.copy(this.physics.car.chassis.body.position).add(this.chassis.offset)
    //     this.chassis.object.quaternion.copy(this.physics.car.chassis.body.quaternion)
    //   }
    //
    //   // Update position
    //   this.position.copy(this.chassis.object.position)
    // })
  }
  setMovement() {
    this.movement = {
      speed: new THREE.Vector3(),
      localSpeed: new THREE.Vector3(),
      acceleration: new THREE.Vector3(),
      localAcceleration: new THREE.Vector3(),
    };

    // this.time.on('tick', () => {
    //   const movementSpeed = new THREE.Vector3()
    //   movementSpeed.copy(this.chassis.object.position).sub(this.chassis.oldPosition)
    //   this.movement.acceleration = movementSpeed.clone().sub(this.movement.speed)
    //   this.movement.speed.copy(movementSpeed)
    //
    //   this.movement.localSpeed = this.movement.speed.clone().applyAxisAngle(new THREE.Vector3(0, 0, 1), - this.chassis.object.rotation.z)
    //   this.movement.localAcceleration = this.movement.acceleration.clone().applyAxisAngle(new THREE.Vector3(0, 0, 1), - this.chassis.object.rotation.z)
    // });
  }
}
