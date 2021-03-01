import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import solidConfig from './Icon/solid-config.json';
import regularConfig from './Icon/regular-config.json';
import lightConfig from './Icon/light-config.json';
import brandsConfig from './Icon/brands-config.json';

export const LightIcon = createIconSetFromIcoMoon(
  lightConfig,
  'FaLight',
  'fa-light.ttf',
);
export const SolidIcon = createIconSetFromIcoMoon(
  solidConfig,
  'FaSolid',
  'fa-solid.ttf',
);
export const BrandsIcon = createIconSetFromIcoMoon(
  brandsConfig,
  'FaBrands',
  'fa-brands.ttf',
);
export const RegularIcon = createIconSetFromIcoMoon(
  regularConfig,
  'FaRegular',
  'fa-regular.ttf',
);

export default LightIcon;
