import MapSource from '../Models/Map/MainMap.glb'
import SkateSource from '../Models/Skate/Skate.glb'
import MainMapCollision from '../Models/Map/MainMapCollision.glb'
import MainMapFloorShadow from '../Models/Map/floorShadow.png'

const sources = [
  {
    name: 'MapModel',
    type: 'gltfModel',
    path: MapSource,
  },
  {
    name: 'MainMapCollision',
    type: 'gltfModel',
    path: MainMapCollision,
  },
  {
    name: 'MainMapFloorShadow',
    type: 'texture',
    path: MainMapFloorShadow,
  },
  {
    name: 'SkateModel',
    type: 'gltfModel',
    path: SkateSource,
  },
];
export default sources;
