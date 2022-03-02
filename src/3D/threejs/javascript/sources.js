import MapSource from '../Models/Map/MainMap.glb';
import SkateSource from '../Models/Skate/Skate.glb';
import MainMapCollision from '../Models/Map/MainMapCollision.glb';
import MainMapFloorShadow from '../Models/Map/floorShadow.png';
import cText from '../Models/Text/c.glb';
import cCollision from '../Models/Text/cCollision.glb';
import sText from '../Models/Text/s.glb';
import sCollision from '../Models/Text/sCollision.glb';
import HCollision from '../Models/Text/HCollision.glb';
import HText from '../Models/Text/H.glb';
import TCollision from '../Models/Text/TCollision.glb';
import TText from '../Models/Text/T.glb';
import MCollision from '../Models/Text/MCollision.glb';
import MText from '../Models/Text/M.glb';
import LCollision from '../Models/Text/LCollision.glb';
import LText from '../Models/Text/L.glb';
import JCollision from '../Models/Text/JCollision.glb';
import JText from '../Models/Text/J.glb';
import ACollision from '../Models/Text/ACollision.glb';
import AText from '../Models/Text/A.glb';
import VCollision from '../Models/Text/VCollision.glb';
import VText from '../Models/Text/V.glb';
import IthubEkatCollision from '../Models/Text/IthubEkatCollision.glb';
import IthubEkatText from '../Models/Text/IthubEkat.glb';
import MainHero from '../Models/MainHero/MainHero.glb';

const sources = [
  {
    name: 'IthubEkatText',
    type: 'gltfModel',
    path: IthubEkatText,
  },
  {
    name: 'IthubEkatCollision',
    type: 'gltfModel',
    path: IthubEkatCollision,
  },
  {
    name: 'MainHero',
    type: 'gltfModel',
    path: MainHero,
  },
  {
    name: 'AText',
    type: 'gltfModel',
    path: AText,
  },
  {
    name: 'ACollision',
    type: 'gltfModel',
    path: ACollision,
  },
  {
    name: 'VText',
    type: 'gltfModel',
    path: VText,
  },
  {
    name: 'VCollision',
    type: 'gltfModel',
    path: VCollision,
  },
  {
    name: 'JText',
    type: 'gltfModel',
    path: JText,
  },
  {
    name: 'JCollision',
    type: 'gltfModel',
    path: JCollision,
  },
  {
    name: 'LText',
    type: 'gltfModel',
    path: LText,
  },
  {
    name: 'LCollision',
    type: 'gltfModel',
    path: LCollision,
  },
  {
    name: 'MText',
    type: 'gltfModel',
    path: MText,
  },
  {
    name: 'MCollision',
    type: 'gltfModel',
    path: MCollision,
  },
  {
    name: 'TText',
    type: 'gltfModel',
    path: TText,
  },
  {
    name: 'TCollision',
    type: 'gltfModel',
    path: TCollision,
  },
  {
    name: 'HText',
    type: 'gltfModel',
    path: HText,
  },
  {
    name: 'HCollision',
    type: 'gltfModel',
    path: HCollision,
  },
  {
    name: 'sCollision',
    type: 'gltfModel',
    path: sCollision,
  },
  {
    name: 'sText',
    type: 'gltfModel',
    path: sText,
  },
  {
    name: 'cText',
    type: 'gltfModel',
    path: cText,
  },
  {
    name: 'cCollision',
    type: 'gltfModel',
    path: cCollision,
  },
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
