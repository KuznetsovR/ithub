import MapSource from '../Models/Map/MainMap.glb'
import SkateSource from '../Models/Skate/Skate.glb'
import MainMapCollision from '../Models/Map/MainMapCollision.glb'
import MainMapFloorShadow from '../Models/Map/floorShadow.png'
import cText from '../Models/Text/c.glb'
import cCollision from '../Models/Text/cCollision.glb'
import sText from '../Models/Text/s.glb'
import sCollision from '../Models/Text/sCollision.glb'
import HCollision from '../Models/Text/HCollision.glb'
import HText from '../Models/Text/H.glb'
import TCollision from '../Models/Text/TCollision.glb'
import TText from '../Models/Text/T.glb'
import MCollision from '../Models/Text/MCollision.glb'
import MText from '../Models/Text/M.glb'
import LCollision from '../Models/Text/LCollision.glb'
import LText from '../Models/Text/L.glb'
import JCollision from '../Models/Text/JCollision.glb'
import JText from '../Models/Text/J.glb'
import ACollision from '../Models/Text/ACollision.glb'
import AText from '../Models/Text/A.glb'
import VCollision from '../Models/Text/VCollision.glb'
import VText from '../Models/Text/V.glb'
import IthubEkatCollision from '../Models/Text/IthubEkatCollision.glb'
import IthubEkatCollision2 from '../Models/Text/IthubEkatCollision2.glb'
import IthubEkatText from '../Models/Text/IthubEkat.glb'
import MainHero from '../Models/MainHero/MainHero.glb'
import Ps4 from '../Models/Text/ps4.glb'
import Ps4Collision from '../Models/Text/ps4Collision.glb'
import htmlCode from '../Models/Text/htmlCode.glb'
import htmlCodeCollision from '../Models/Text/htmlCodeCollision.glb'
import javaCode from '../Models/Text/javaCode.glb'
import javaCodeCollision from '../Models/Text/javaCodeCollision.glb'
import adressText from '../Models/Text/adressText.glb'
import adressTextCollision from '../Models/Text/adressTextCollision.glb'
import sisText from '../Models/Text/sisText.glb'
import sisTextCollision from '../Models/Text/sisTextCollision.glb'
import phoneNumber from '../Models/Text/phoneNumber.glb'
import phoneNumberCollision from '../Models/Text/phoneNumberCollision.glb'
import RText from '../Models/Text/R.glb'
import RCollision from '../Models/Text/RCollision.glb'
import eText from '../Models/Text/e.glb'
import eCollision from '../Models/Text/eCollision.glb'
import ttText from '../Models/Text/tt.glb'
import ttCollision from '../Models/Text/ttCollision.glb'

const sources = [
  {
    name: 'ttText',
    type: 'gltfModel',
    path: ttText,
  },
  {
    name: 'ttCollision',
    type: 'gltfModel',
    path: ttCollision,
  },
  {
    name: 'eText',
    type: 'gltfModel',
    path: eText,
  },
  {
    name: 'eCollision',
    type: 'gltfModel',
    path: eCollision,
  },
  {
    name: 'RText',
    type: 'gltfModel',
    path: RText,
  },
  {
    name: 'RCollision',
    type: 'gltfModel',
    path: RCollision,
  },
  {
    name: 'phoneNumber',
    type: 'gltfModel',
    path: phoneNumber,
  },
  {
    name: 'phoneNumberCollision',
    type: 'gltfModel',
    path: phoneNumberCollision,
  },
  {
    name: 'sisText',
    type: 'gltfModel',
    path: sisText,
  },
  {
    name: 'sisTextCollision',
    type: 'gltfModel',
    path: sisTextCollision,
  },
  {
    name: 'adressText',
    type: 'gltfModel',
    path: adressText,
  },
  {
    name: 'adressTextCollision',
    type: 'gltfModel',
    path: adressTextCollision,
  },
  {
    name: 'javaCode',
    type: 'gltfModel',
    path: javaCode,
  },
  {
    name: 'javaCodeCollision',
    type: 'gltfModel',
    path: javaCodeCollision,
  },
  {
    name: 'htmlCode',
    type: 'gltfModel',
    path: htmlCode,
  },
  {
    name: 'htmlCodeCollision',
    type: 'gltfModel',
    path: htmlCodeCollision,
  },
  {
    name: 'Ps4',
    type: 'gltfModel',
    path: Ps4,
  },
  {
    name: 'Ps4Collision',
    type: 'gltfModel',
    path: Ps4Collision,
  },
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
    name: 'IthubEkatCollision2',
    type: 'gltfModel',
    path: IthubEkatCollision2,
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
