import * as THREE from 'three';
import FloorShadowMaterial from '../Materials/FloorShadow';
import World from './World';

export default class Materials {
  world = new World();
  debug = this.world.debug;
  resources = this.world.resources;

  constructor() {
    if (this.debug.active) {
      this.debugFolder = this.debug.addFolder('materials');
    }

    this.items = {};

    this.setPures();
    this.setFloorShadow();
  }

  setPures() {
    this.pures = {};
    this.pures.items = {};
    this.pures.items.red = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    this.pures.items.red.name = 'pureRed';
    this.pures.items.white = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.pures.items.white.name = 'pureWhite';
    this.pures.items.yellow = new THREE.MeshBasicMaterial({ color: 0xffe889 });
    this.pures.items.yellow.name = 'pureYellow';
  }

  // if we need matcaps, we can add them here

  setFloorShadow() {
    this.items.floorShadow = new FloorShadowMaterial();
    this.items.floorShadow.depthWrite = false;
    this.items.floorShadow.shadowColor = '#45464a';
    this.items.floorShadow.uniforms.uShadowColor.value = new THREE.Color(this.items.floorShadow.shadowColor);
    this.items.floorShadow.uniforms.uAlpha.value = 0;

    this.items.floorShadow.updateMaterials = () => {
      this.items.floorShadow.uniforms.uShadowColor.value = new THREE.Color(
        this.items.floorShadow.shadowColor
      );

      for (const _item of this.objects.items) {
        for (const _child of _item.container.children) {
          if (_child.material instanceof THREE.ShaderMaterial) {
            if (_child.material.uniforms.uShadowColor) {
              _child.material.uniforms.uShadowColor.value = new THREE.Color(
                this.items.floorShadow.shadowColor
              );
            }
          }
        }
      }
    };

    // Debug
    if (this.debug.active) {
      const folder = this.debugFolder.addFolder('floorShadow');

      folder.addColor(this.items.floorShadow, 'shadowColor').onChange(this.items.floorShadow.updateMaterials);
    }
  }
}
