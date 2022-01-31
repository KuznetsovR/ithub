import * as THREE from 'three';
import FloorMaterial from '../Materials/Floor';
import Experience from '../Experience';

export default class Floor {
  constructor() {
    this.container = new THREE.Object3D();
    this.container.matrixAutoUpdate = false;

    this.experience = new Experience();
    this.debug = this.experience.debug
    this.geometry = new THREE.PlaneBufferGeometry(2, 2, 10, 10);
    this.resources = this.experience.resources;

    this.colors = {
      topLeft: '#626161',
      topRight: '#565656',
      bottomRight: '#b8b5b0',
      bottomLeft: '#8f8f8f',
    };

    this.material = new FloorMaterial();

    this.updateMaterial = () => {
      const topLeft = new THREE.Color(this.colors.topLeft);
      const topRight = new THREE.Color(this.colors.topRight);
      const bottomRight = new THREE.Color(this.colors.bottomRight);
      const bottomLeft = new THREE.Color(this.colors.bottomLeft);

      const data = new Uint8Array([
        Math.round(bottomLeft.r * 255),
        Math.round(bottomLeft.g * 255),
        Math.round(bottomLeft.b * 255),
        Math.round(bottomRight.r * 255),
        Math.round(bottomRight.g * 255),
        Math.round(bottomRight.b * 255),
        Math.round(topLeft.r * 255),
        Math.round(topLeft.g * 255),
        Math.round(topLeft.b * 255),
        Math.round(topRight.r * 255),
        Math.round(topRight.g * 255),
        Math.round(topRight.b * 255),
      ]);

      this.backgroundTexture = new THREE.DataTexture(data, 2, 2, THREE.RGBFormat);
      this.backgroundTexture.magFilter = THREE.LinearFilter;
      this.backgroundTexture.needsUpdate = true;

      this.material.uniforms.tBackground.value = this.backgroundTexture;
    };
    this.updateMaterial();

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.frustumCulled = false;
    this.mesh.matrixAutoUpdate = false;
    this.mesh.updateMatrix();
    this.container.add(this.mesh);

    if(this.debug.active)
    {
      const folder = this.debug.ui.addFolder('FloorColors')
      // folder.open()

      folder.addColor(this.colors, 'topLeft').onChange(this.updateMaterial)
      folder.addColor(this.colors, 'topRight').onChange(this.updateMaterial)
      folder.addColor(this.colors, 'bottomRight').onChange(this.updateMaterial)
      folder.addColor(this.colors, 'bottomLeft').onChange(this.updateMaterial)
    }
  }
}
