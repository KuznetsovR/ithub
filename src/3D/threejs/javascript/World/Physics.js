import * as CANNON from 'cannon';
import * as THREE from 'three';
import World from './World';

export default class Physics {
  threeWorld = new World();
  time = this.threeWorld.time;
  controls = this.threeWorld.controls;
  debug = this.threeWorld.debug;

  constructor() {
    if (this.debug.active) {
      this.debugFolder = this.debug.addFolder('physics');
    }

    this.setWorld();
    this.setModels();
    this.setMaterials();
    this.setFloor();
    this.setSkate();
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

    if (this.debug.active) {
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

    if (this.debug.active) {
      this.debugFolder.add(this.models.container, 'visible').name('modelsVisible');
    }
  }
  setMaterials() {
    this.materials = {};

    // All materials
    this.materials.items = {};
    this.materials.items.floor = new CANNON.Material('floorMaterial');
    this.materials.items.dummy = new CANNON.Material('dummyMaterial');
    this.materials.items.wheel = new CANNON.Material('wheelMaterial');
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

    this.materials.contacts.floorWheel = new CANNON.ContactMaterial(
      this.materials.items.floor,
      this.materials.items.wheel,
      { friction: 0.3, restitution: 0, contactEquationStiffness: 1000 }
    );
    this.world.addContactMaterial(this.materials.contacts.floorWheel);
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
      width: 1.01,
      height: 2.2,
      depth: 2.02,
      offset: new CANNON.Vec3(0, 0, 1.1),
      mass: 20,
      wheelFrontOffsetDepth: 0.635,
      wheelBackOffsetDepth: -0.475,
      wheelOffsetWidth: 0.2,
      wheelRadius: 0.1,
      wheelHeight: 0.1,
      wheelSuspensionStiffness: 25,
      wheelSuspensionRestLength: 0.1,
      wheelFrictionSlip: 5,
      wheelDampingRelaxation: 1.8,
      wheelDampingCompression: 1.5,
      wheelMaxSuspensionForce: 100000,
      wheelRollInfluence: 0.01,
      wheelMaxSuspensionTravel: 0.4,
      wheelCustomSlidingRotationalSpeed: -30,
      wheelMass: 5,
      controlsSteeringSpeed: 0.005, // skate wheels turning speed
      controlsSteeringMax: Math.PI * 0.07,
      controlsSteeringQuad: true,
      controlsAcceleratingMaxSpeed: 0.055,
      controlsAcceleratingSpeed: 2,
      controlsAcceleratingQuad: true,
      controlsBrakeStrength: 0.45,
    };

    this.skate.create = () => {
      /**
       * Chassis
       */

      this.skate.chassis = {
        shape: new CANNON.Box(
          new CANNON.Vec3(
            this.skate.options.depth * 0.5,
            this.skate.options.width * 0.5,
            this.skate.options.height * 0.5
          )
        ),
        body: new CANNON.Body({ mass: this.skate.options.mass }),
      };
      this.skate.chassis.body.allowSleep = false;
      this.skate.chassis.body.position.set(0, 0, 4);
      // this.skate.chassis.body.sleep();
      this.skate.chassis.body.addShape(this.skate.chassis.shape, this.skate.options.offset);
      this.skate.chassis.body.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 0, 1), -Math.PI * 0.5);

      /**
       * Vehicle
       */
      this.skate.vehicle = new CANNON.RaycastVehicle({
        chassisBody: this.skate.chassis.body,
        sliding: false,
      });

      this.skate.wheels = {
        options: {
          radius: this.skate.options.wheelRadius,
          height: this.skate.options.wheelHeight,
          suspensionStiffness: this.skate.options.wheelSuspensionStiffness,
          suspensionRestLength: this.skate.options.wheelSuspensionRestLength,
          frictionSlip: this.skate.options.wheelFrictionSlip,
          dampingRelaxation: this.skate.options.wheelDampingRelaxation,
          dampingCompression: this.skate.options.wheelDampingCompression,
          maxSuspensionForce: this.skate.options.wheelMaxSuspensionForce,
          rollInfluence: this.skate.options.wheelRollInfluence,
          maxSuspensionTravel: this.skate.options.wheelMaxSuspensionTravel,
          customSlidingRotationalSpeed: this.skate.options.wheelCustomSlidingRotationalSpeed,
          useCustomSlidingRotationalSpeed: true,
          directionLocal: new CANNON.Vec3(0, 0, -1),
          axleLocal: new CANNON.Vec3(0, 1, 0),
          chassisConnectionPointLocal: new CANNON.Vec3(1, 1, 0), // Will be changed for each wheel
        },
      };

      // Front left
      this.skate.wheels.options.chassisConnectionPointLocal.set(
        this.skate.options.wheelFrontOffsetDepth,
        this.skate.options.wheelOffsetWidth,
        0
      );
      this.skate.vehicle.addWheel(this.skate.wheels.options);

      // Front right
      this.skate.wheels.options.chassisConnectionPointLocal.set(
        this.skate.options.wheelFrontOffsetDepth,
        -this.skate.options.wheelOffsetWidth,
        0
      );
      this.skate.vehicle.addWheel(this.skate.wheels.options);

      // Back left
      this.skate.wheels.options.chassisConnectionPointLocal.set(
        this.skate.options.wheelBackOffsetDepth,
        this.skate.options.wheelOffsetWidth,
        0
      );
      this.skate.vehicle.addWheel(this.skate.wheels.options);

      // Back right
      this.skate.wheels.options.chassisConnectionPointLocal.set(
        this.skate.options.wheelBackOffsetDepth,
        -this.skate.options.wheelOffsetWidth,
        0
      );
      this.skate.vehicle.addWheel(this.skate.wheels.options);

      this.skate.vehicle.addToWorld(this.world);

      this.skate.wheels.indexes = {
        frontLeft: 0,
        frontRight: 1,
        backLeft: 2,
        backRight: 3,
      };

      this.skate.wheels.bodies = [];

      for (const _wheelInfos of this.skate.vehicle.wheelInfos) {
        const shape = new CANNON.Cylinder(
          _wheelInfos.radius,
          _wheelInfos.radius,
          this.skate.wheels.options.height,
          20
        );
        const body = new CANNON.Body({
          mass: this.skate.options.wheelMass,
          material: this.materials.items.wheel,
        });
        const quaternion = new CANNON.Quaternion();
        quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), Math.PI / 2);

        body.type = CANNON.Body.KINEMATIC;

        body.addShape(shape, new CANNON.Vec3(), quaternion);
        this.skate.wheels.bodies.push(body);
      }

      /**
       * Model
       */

      this.skate.model = {
        container: new THREE.Object3D(),
      };
      this.models.container.add(this.skate.model.container);

      this.skate.model.material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });

      this.skate.model.chassis = new THREE.Mesh(
        new THREE.BoxGeometry(this.skate.options.depth, this.skate.options.width, this.skate.options.height),
        this.skate.model.material
      );
      this.skate.model.container.add(this.skate.model.chassis);

      this.skate.model.wheels = [];

      const wheelGeometry = new THREE.CylinderGeometry(
        this.skate.options.wheelRadius,
        this.skate.options.wheelRadius,
        this.skate.options.wheelHeight,
        8,
        1
      );

      for (let i = 0; i < 4; i++) {
        const wheel = new THREE.Mesh(wheelGeometry, this.skate.model.material);
        this.skate.model.container.add(wheel);
        this.skate.model.wheels.push(wheel);
      }
    };

    /**
     * Destroy method
     */
    this.skate.destroy = () => {
      this.skate.vehicle.removeFromWorld(this.world);
      this.models.container.remove(this.skate.model.container);
    };

    /**
     * Recreate method
     */
    this.skate.recreate = () => {
      this.skate.destroy();
      this.skate.create();
      this.skate.chassis.body.wakeUp();
    };

    this.skate.brake = () => {
      this.skate.vehicle.setBrake(1, 0);
      this.skate.vehicle.setBrake(1, 1);
      this.skate.vehicle.setBrake(1, 2);
      this.skate.vehicle.setBrake(1, 3);
    };
    this.skate.unbrake = () => {
      this.skate.vehicle.setBrake(0, 0);
      this.skate.vehicle.setBrake(0, 1);
      this.skate.vehicle.setBrake(0, 2);
      this.skate.vehicle.setBrake(0, 3);
    };

    this.world.addEventListener('postStep', () => {
      // update speed
      let positionDelta = new CANNON.Vec3();
      positionDelta = positionDelta.copy(this.skate.chassis.body.position);
      positionDelta = positionDelta.vsub(this.skate.oldPosition);
      this.skate.oldPosition.copy(this.skate.chassis.body.position);
      this.skate.speed = positionDelta.length();

      // update forward

      const localForward = new CANNON.Vec3(1, 0, 0);
      this.skate.chassis.body.vectorToWorldFrame(localForward, this.skate.worldForward);
      this.skate.angle = Math.atan2(this.skate.worldForward.y, this.skate.worldForward.x);

      this.skate.forwardSpeed = this.skate.worldForward.dot(positionDelta);
      this.skate.goingForward = this.skate.forwardSpeed > 0;
      // Update wheel bodies
      for (let i = 0; i < this.skate.vehicle.wheelInfos.length; i++) {
        this.skate.vehicle.updateWheelTransform(i);

        const transform = this.skate.vehicle.wheelInfos[i].worldTransform;
        this.skate.wheels.bodies[i].position.copy(transform.position);
        this.skate.wheels.bodies[i].quaternion.copy(transform.quaternion);

        // Rotate the wheels on the right
        if (i === 1 || i === 3) {
          const rotationQuaternion = new CANNON.Quaternion(0, 0, 0, 1);
          rotationQuaternion.setFromAxisAngle(new CANNON.Vec3(0, 0, 1), Math.PI);
          this.skate.wheels.bodies[i].quaternion =
            this.skate.wheels.bodies[i].quaternion.mult(rotationQuaternion);
        }
      }

      // Slow down back
      if (!this.controls.actions.up && !this.controls.actions.down) {
        let slowDownForce = this.skate.worldForward.clone();

        if (this.skate.goingForward) {
          slowDownForce = slowDownForce.negate();
        }

        slowDownForce = slowDownForce.scale(this.skate.chassis.body.velocity.length() * 0.1);

        this.skate.chassis.body.applyImpulse(slowDownForce, this.skate.chassis.body.position);
      }
    });

    this.time.on('tick', () => {
      // Update chassis model
      this.skate.model.chassis.position.copy(this.skate.chassis.body.position).add(this.skate.options.offset);
      this.skate.model.chassis.quaternion.copy(this.skate.chassis.body.quaternion);

      // Update wheel models
      for (const _wheelKey in this.skate.wheels.bodies) {
        const wheelBody = this.skate.wheels.bodies[_wheelKey];
        const wheelMesh = this.skate.model.wheels[_wheelKey];

        wheelMesh.position.copy(wheelBody.position);
        wheelMesh.quaternion.copy(wheelBody.quaternion);
      }

      /**
       * Steering
       */
      const steerStrength = this.time.delta * this.skate.options.controlsSteeringSpeed;

      // Steer right
      if (this.controls.actions.right) {
        this.skate.steering += steerStrength;
      }
      // Steer left
      else if (this.controls.actions.left) {
        this.skate.steering -= steerStrength;
      }
      // Steer center
      else {
        if (Math.abs(this.skate.steering) > steerStrength) {
          this.skate.steering -= steerStrength * Math.sign(this.skate.steering);
        } else {
          this.skate.steering = 0;
        }
      }

      // Clamp steer
      if (Math.abs(this.skate.steering) > this.skate.options.controlsSteeringMax) {
        this.skate.steering = Math.sign(this.skate.steering) * this.skate.options.controlsSteeringMax;
      }

      // Update wheels
      this.skate.vehicle.setSteeringValue(-this.skate.steering, this.skate.wheels.indexes.frontLeft);
      this.skate.vehicle.setSteeringValue(-this.skate.steering, this.skate.wheels.indexes.frontRight);

      if (this.skate.options.controlsSteeringQuad) {
        this.skate.vehicle.setSteeringValue(this.skate.steering, this.skate.wheels.indexes.backLeft);
        this.skate.vehicle.setSteeringValue(this.skate.steering, this.skate.wheels.indexes.backRight);
      }

      /**
       * Accelerate
       */

      const accelerationSpeed = this.skate.options.controlsAcceleratingSpeed;
      const accelerateStrength = this.time.delta * accelerationSpeed;
      const controlsAcceleratingMaxSpeed = this.skate.options.controlsAcceleratingMaxSpeed;

      if (this.controls.actions.up) {
        if (this.skate.speed < controlsAcceleratingMaxSpeed || !this.skate.goingForward) {
          this.skate.accelerating = accelerateStrength;
        } else {
          this.skate.accelerating = 0;
        }
      }

      // Accelerate Down
      else if (this.controls.actions.down) {
        if (this.skate.speed < controlsAcceleratingMaxSpeed || this.skate.goingForward) {
          this.skate.accelerating = -accelerateStrength;
        } else {
          this.skate.accelerating = 0;
        }
      } else {
        this.skate.accelerating = 0;
      }

      this.skate.vehicle.applyEngineForce(-this.skate.accelerating, this.skate.wheels.indexes.backLeft);
      this.skate.vehicle.applyEngineForce(-this.skate.accelerating, this.skate.wheels.indexes.backRight);

      if (this.skate.options.controlsSteeringQuad) {
        this.skate.vehicle.applyEngineForce(-this.skate.accelerating, this.skate.wheels.indexes.frontLeft);
        this.skate.vehicle.applyEngineForce(-this.skate.accelerating, this.skate.wheels.indexes.frontRight);
      }

      /**
       * Brake
       */
      if (this.controls.actions.brake) {
        this.skate.vehicle.setBrake(this.skate.options.controlsBrakeStrength, 0);
        this.skate.vehicle.setBrake(this.skate.options.controlsBrakeStrength, 1);
        this.skate.vehicle.setBrake(this.skate.options.controlsBrakeStrength, 2);
        this.skate.vehicle.setBrake(this.skate.options.controlsBrakeStrength, 3);
      } else {
        this.skate.vehicle.setBrake(0, 0);
        this.skate.vehicle.setBrake(0, 1);
        this.skate.vehicle.setBrake(0, 2);
        this.skate.vehicle.setBrake(0, 3);
      }
    });

    this.skate.create();

    // Debug
    if (this.debug.active) {
      this.skate.debugFolder = this.debugFolder.addFolder('skate');
      this.skate.debugFolder.open();

      this.skate.debugFolder
        .add(this.skate.options, 'width')
        .step(0.001)
        .min(0)
        .max(5)
        .name('chassisWidth')
        .onFinishChange(this.skate.recreate);
      this.skate.debugFolder
        .add(this.skate.options, 'height')
        .step(0.001)
        .min(0)
        .max(5)
        .name('chassisHeight')
        .onFinishChange(this.skate.recreate);
      this.skate.debugFolder
        .add(this.skate.options, 'depth')
        .step(0.001)
        .min(0)
        .max(5)
        .name('chassisDepth')
        .onFinishChange(this.skate.recreate);
      this.skate.debugFolder
        .add(this.skate.options.offset, 'z')
        .step(0.001)
        .min(0)
        .max(5)
        .name('chassisOffset')
        .onFinishChange(this.skate.recreate);
      this.skate.debugFolder
        .add(this.skate.options, 'mass')
        .step(0.001)
        .min(0)
        .max(1000)
        .name('chassisMass')
        .onFinishChange(this.skate.recreate);
      this.skate.debugFolder
        .add(this.skate.options, 'wheelFrontOffsetDepth')
        .step(0.001)
        .min(0)
        .max(5)
        .name('wheelFrontOffsetDepth')
        .onFinishChange(this.skate.recreate);
      this.skate.debugFolder
        .add(this.skate.options, 'wheelBackOffsetDepth')
        .step(0.001)
        .min(-5)
        .max(0)
        .name('wheelBackOffsetDepth')
        .onFinishChange(this.skate.recreate);
      this.skate.debugFolder
        .add(this.skate.options, 'wheelOffsetWidth')
        .step(0.001)
        .min(0)
        .max(5)
        .name('wheelOffsetWidth')
        .onFinishChange(this.skate.recreate);
      this.skate.debugFolder
        .add(this.skate.options, 'wheelRadius')
        .step(0.001)
        .min(0)
        .max(2)
        .name('wheelRadius')
        .onFinishChange(this.skate.recreate);
      this.skate.debugFolder
        .add(this.skate.options, 'wheelHeight')
        .step(0.001)
        .min(0)
        .max(2)
        .name('wheelHeight')
        .onFinishChange(this.skate.recreate);
      this.skate.debugFolder
        .add(this.skate.options, 'wheelSuspensionStiffness')
        .step(0.001)
        .min(0)
        .max(300)
        .name('wheelSuspensionStiffness')
        .onFinishChange(this.skate.recreate);
      this.skate.debugFolder
        .add(this.skate.options, 'wheelSuspensionRestLength')
        .step(0.001)
        .min(0)
        .max(5)
        .name('wheelSuspensionRestLength')
        .onFinishChange(this.skate.recreate);
      this.skate.debugFolder
        .add(this.skate.options, 'wheelFrictionSlip')
        .step(0.001)
        .min(0)
        .max(30)
        .name('wheelFrictionSlip')
        .onFinishChange(this.skate.recreate);
      this.skate.debugFolder
        .add(this.skate.options, 'wheelDampingRelaxation')
        .step(0.001)
        .min(0)
        .max(30)
        .name('wheelDampingRelaxation')
        .onFinishChange(this.skate.recreate);
      this.skate.debugFolder
        .add(this.skate.options, 'wheelDampingCompression')
        .step(0.001)
        .min(0)
        .max(30)
        .name('wheelDampingCompression')
        .onFinishChange(this.skate.recreate);
      this.skate.debugFolder
        .add(this.skate.options, 'wheelMaxSuspensionForce')
        .step(0.001)
        .min(0)
        .max(1000000)
        .name('wheelMaxSuspensionForce')
        .onFinishChange(this.skate.recreate);
      this.skate.debugFolder
        .add(this.skate.options, 'wheelRollInfluence')
        .step(0.001)
        .min(0)
        .max(1)
        .name('wheelRollInfluence')
        .onFinishChange(this.skate.recreate);
      this.skate.debugFolder
        .add(this.skate.options, 'wheelMaxSuspensionTravel')
        .step(0.001)
        .min(0)
        .max(5)
        .name('wheelMaxSuspensionTravel')
        .onFinishChange(this.skate.recreate);
      this.skate.debugFolder
        .add(this.skate.options, 'wheelCustomSlidingRotationalSpeed')
        .step(0.001)
        .min(-45)
        .max(45)
        .name('wheelCustomSlidingRotationalSpeed')
        .onFinishChange(this.skate.recreate);
      this.skate.debugFolder
        .add(this.skate.options, 'wheelMass')
        .step(0.001)
        .min(0)
        .max(1000)
        .name('wheelMass')
        .onFinishChange(this.skate.recreate);
      this.skate.debugFolder
        .add(this.skate.options, 'controlsSteeringSpeed')
        .step(0.001)
        .min(0)
        .max(0.1)
        .name('controlsSteeringSpeed');
      this.skate.debugFolder
        .add(this.skate.options, 'controlsSteeringMax')
        .step(0.001)
        .min(0)
        .max(Math.PI * 0.5)
        .name('controlsSteeringMax');
      this.skate.debugFolder.add(this.skate.options, 'controlsSteeringQuad').name('controlsSteeringQuad');
      this.skate.debugFolder
        .add(this.skate.options, 'controlsAcceleratingSpeed')
        .step(0.001)
        .min(0)
        .max(30)
        .name('controlsAcceleratingSpeed');
      this.skate.debugFolder
        .add(this.skate.options, 'controlsAcceleratingQuad')
        .name('controlsAcceleratingQuad');
      this.skate.debugFolder
        .add(this.skate.options, 'controlsBrakeStrength')
        .step(0.001)
        .min(0)
        .max(5)
        .name('controlsBrakeStrength');
      this.skate.debugFolder.add(this.skate, 'recreate');
    }
  }

  addObject(_options) {
    const collision = {
      model: {
        meshes: [],
        container: new THREE.Object3D(),
      },
    };
    this.models.container.add(collision.model.container);

    collision.children = [];

    // Material
    const bodyMaterial = this.materials.items.dummy;

    // Body
    collision.body = new CANNON.Body({
      position: new CANNON.Vec3(_options.offset.x, _options.offset.y, _options.offset.z),
      mass: _options.mass,
      material: bodyMaterial,
    });

    collision.body.allowSleep = true;
    collision.body.sleepSpeedLimit = 0.01;
    if (_options.sleep) {
      collision.body.sleep();
    }

    this.world.addBody(collision.body);

    // Rotation
    if (_options.rotation) {
      const rotationQuaternion = new CANNON.Quaternion();
      rotationQuaternion.setFromEuler(
        _options.rotation.x,
        _options.rotation.y,
        _options.rotation.z,
        _options.rotation.order
      );
      collision.body.quaternion = collision.body.quaternion.mult(rotationQuaternion);
    }

    // Center
    collision.center = new CANNON.Vec3(0, 0, 0);

    // Shapes
    const shapes = [];

    for (const mesh of _options.meshes) {
      let shape = null;

      if (mesh.name.match(/^cube_?[0-9]{0,3}?|box[0-9]{0,3}?$/i)) {
        shape = 'box';
      } else if (mesh.name.match(/^center_?[0-9]{0,3}?$/i)) {
        shape = 'center';
      }

      if (shape === 'center') {
        collision.center.set(mesh.position.x, mesh.position.y, mesh.position.z);
      } else if (shape) {
        // Geometry
        let shapeGeometry = null;

        if (shape === 'box') {
          const halfExtents = new CANNON.Vec3(mesh.scale.x * 0.5, mesh.scale.y * 0.5, mesh.scale.z * 0.5);
          shapeGeometry = new CANNON.Box(halfExtents);
        }

        // Position
        const shapePosition = new CANNON.Vec3(mesh.position.x, mesh.position.y, mesh.position.z);

        // Quaternion
        const shapeQuaternion = new CANNON.Quaternion(
          mesh.quaternion.x,
          mesh.quaternion.y,
          mesh.quaternion.z,
          mesh.quaternion.w
        );

        // Save
        shapes.push({ shapeGeometry, shapePosition, shapeQuaternion });
        // Create model object
        let modelGeometry = null;
        if (shape === 'box') {
          modelGeometry = new THREE.BoxGeometry(1, 1, 1);
        }

        const modelMesh = new THREE.Mesh(
          modelGeometry,
          this.models.materials[_options.mass === 0 ? 'static' : 'dynamic']
        );
        modelMesh.position.copy(mesh.position);
        modelMesh.scale.copy(mesh.scale);
        modelMesh.quaternion.copy(mesh.quaternion);

        collision.model.meshes.push(modelMesh);
      }
    }

    // Update meshes to match center
    for (const _mesh of collision.model.meshes) {
      _mesh.position.x -= collision.center.x;
      _mesh.position.y -= collision.center.y;
      _mesh.position.z -= collision.center.z;

      collision.model.container.add(_mesh);
    }

    // Update shapes to match center
    for (const _shape of shapes) {
      // Create physic object
      _shape.shapePosition.x -= collision.center.x;
      _shape.shapePosition.y -= collision.center.y;
      _shape.shapePosition.z -= collision.center.z;

      collision.body.addShape(_shape.shapeGeometry, _shape.shapePosition, _shape.shapeQuaternion);
    }

    // Update body to match center
    collision.body.position.x += collision.center.x;
    collision.body.position.y += collision.center.y;
    collision.body.position.z += collision.center.z;

    // Save origin
    collision.origin = {};
    collision.origin.position = collision.body.position.clone();
    collision.origin.quaternion = collision.body.quaternion.clone();
    collision.origin.sleep = _options.sleep;

    // Time tick update
    this.time.on('tick', () => {
      collision.model.container.position.set(
        collision.body.position.x,
        collision.body.position.y,
        collision.body.position.z
      );
      collision.model.container.quaternion.set(
        collision.body.quaternion.x,
        collision.body.quaternion.y,
        collision.body.quaternion.z,
        collision.body.quaternion.w
      );

      if (this.models.container.visible && _options.mass > 0) {
        for (const _mesh of collision.model.container.children) {
          _mesh.material =
            collision.body.sleepState === 2
              ? this.models.materials.dynamicSleeping
              : this.models.materials.dynamic;
        }
      }
    });

    // Reset
    collision.reset = () => {
      collision.body.position.copy(collision.origin.position);
      collision.body.quaternion.copy(collision.origin.quaternion);

      if (collision.origin.sleep) {
        collision.body.sleep();
      }
    };

    return collision;
  }
}
