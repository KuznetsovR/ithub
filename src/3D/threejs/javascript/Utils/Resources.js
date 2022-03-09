import EventEmitter from './EventEmitter';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

export default class Resources extends EventEmitter {
  constructor(sources) {
    super();
    this.sources = sources;

    this.items = {};
    this.toLoad = this.sources.length;
    this.loaded = 0;
    this.setLoadingManager();
    this.setLoaders();
    this.startLoading();
  }
  startLoading() {
    for (const source of this.sources) {
      if (source.type === 'gltfModel') {
        this.loaders.gltfLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file);
        });
      } else if (source.type === 'texture') {
        this.loaders.textureLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file);
        });
      } else if (source.type === 'cubeTexture') {
        this.loaders.cubeTextureLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file);
        });
      }
    }
  }
  sourceLoaded(source, file) {
    this.items[source.name] = file;
    this.loaded++;
    if (this.loaded === this.toLoad) {
      this.trigger('ready');
    }
  }
  setLoadingManager() {
    this.loadingManager = new THREE.LoadingManager(
      () => {
        console.log('loaded');
      },
      (itemUrl, itemsLoaded, itemsTotal) => {
        // TODO: add progress bar and change it here
        console.log(itemsLoaded / itemsTotal);
      }
    );
  }
  setLoaders() {
    this.loaders = {};
    this.loaders.dracoLoader = new DRACOLoader(this.loadingManager);
    this.loaders.dracoLoader.setDecoderPath('/draco/');
    // this.loaders.dracoLoader.setDecoderPath('/static/draco/');
    // for build

    this.loaders.gltfLoader = new GLTFLoader(this.loadingManager);
    this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader);

    this.loaders.textureLoader = new THREE.TextureLoader(this.loadingManager);
    this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader(this.loadingManager);
  }
}
