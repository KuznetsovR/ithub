import MapSource from '../Models/Map/MainMap.glb'
import SkateSource from '../Models/Skate/Skate.glb'
import MainMapCollision from '../Models/Map/MainMapCollision.glb'
import MainMapFloorShadow from '../Models/Map/floorShadow.png'
import IThubText from '../Models/Text/IThub.glb'
import IThubTextCollision from '../Models/Text/IThubCollision.glb'
import EkatText from '../Models/Text/Ekat.glb'
import EkatTextCollision from '../Models/Text/EkatCollision.glb'

const sources = [
  {
    name: 'IThubText',
    type: 'gltfModel',
    path: IThubText,
  },
  {
    name: 'EkatText',
    type: 'gltfModel',
    path: EkatText,
  },
  {
    name: 'EkatTextCollision',
    type: 'gltfModel',
    path: EkatTextCollision,
  },
  {
    name: 'IThubTextCollision',
    type: 'gltfModel',
    path: IThubTextCollision,
  },{
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
