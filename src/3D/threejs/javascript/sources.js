import MapSource from '../Models/Map/MainMap.glb'
import SkateSource from '../Models/Skate/Skate.glb'
const sources = [
  {
    name: 'MapModel',
    type: 'gltfModel',
    path: MapSource,
  },
  {
    name: 'SkateModel',
    type: 'gltfModel',
    path: SkateSource,
  },
];
export default sources;
