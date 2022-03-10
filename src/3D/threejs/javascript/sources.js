import MapSource from '../Models/Map/MainMap.glb'
import SkateSource from '../Models/Skate/Skate.glb'
import MainMapCollision from '../Models/Map/MainMapCollision.glb'
import MainMapFloorShadow from '../Models/Map/floorShadow.png'
import cText from '../Models/Text/c/c.glb'
import cCollision from '../Models/Text/c/cCollision.glb'
import sText from '../Models/Text/s/s.glb'
import sCollision from '../Models/Text/s/sCollision.glb'
import HCollision from '../Models/Text/h/HCollision.glb'
import HText from '../Models/Text/h/H.glb'
import TCollision from '../Models/Text/T/TCollision.glb'
import TText from '../Models/Text/T/T.glb'
import MCollision from '../Models/Text/m/MCollision.glb'
import MText from '../Models/Text/m/M.glb'
import LCollision from '../Models/Text/l/LCollision.glb'
import LText from '../Models/Text/l/L.glb'
import JCollision from '../Models/Text/j/JCollision.glb'
import JText from '../Models/Text/j/J.glb'
import ACollision from '../Models/Text/a/ACollision.glb'
import AText from '../Models/Text/a/A.glb'
import VCollision from '../Models/Text/v/VCollision.glb'
import VText from '../Models/Text/v/V.glb'
import IthubEkatCollision from '../Models/Text/ithubEkat/IthubEkatCollision.glb'
import IthubEkatCollision2 from '../Models/Text/ithubEkat/IthubEkatCollision2.glb'
import IthubEkatText from '../Models/Text/ithubEkat/IthubEkat.glb'
import MainHero from '../Models/MainHero/MainHero.glb'
import Ps4 from '../Models/decorations/ps4.glb'
import Ps4Collision from '../Models/decorations/ps4Collision.glb'
import htmlCode from '../Models/Text/htmlCode/htmlCode.glb'
import htmlCodeCollision from '../Models/Text/htmlCode/htmlCodeCollision.glb'
import javaCode from '../Models/Text/javaCode/javaCode.glb'
import javaCodeCollision from '../Models/Text/javaCode/javaCodeCollision.glb'
import adressText from '../Models/Text/adress/adressText.glb'
import adressTextCollision from '../Models/Text/adress/adressTextCollision.glb'
import sisText from '../Models/Text/sisText/sisText.glb'
import sisTextCollision from '../Models/Text/sisText/sisTextCollision.glb'
import phoneNumber from '../Models/Text/phoneNumber/phoneNumber.glb'
import phoneNumberCollision from '../Models/Text/phoneNumber/phoneNumberCollision.glb'
import RText from '../Models/Text/r/R.glb'
import RCollision from '../Models/Text/r/RCollision.glb'
import eText from '../Models/Text/e/e.glb'
import eCollision from '../Models/Text/e/eCollision.glb'
import ttText from '../Models/Text/tt/tt.glb'
import ttCollision from '../Models/Text/tt/ttCollision.glb'

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
