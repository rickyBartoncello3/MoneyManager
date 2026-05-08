import {RFValue} from 'react-native-responsive-fontsize';
import {standardHeight} from '@/src/shared/theme/scaling';

const fontSize = {
  // Extra small
  xxs: RFValue(8, standardHeight),
  xs: RFValue(10, standardHeight),
  sm: RFValue(12, standardHeight),

  // Body
  md: RFValue(14, standardHeight),
  base: RFValue(16, standardHeight),
  lg: RFValue(18, standardHeight),

  // Titles
  xl: RFValue(20, standardHeight),
  '2xl': RFValue(22, standardHeight),
  '3xl': RFValue(24, standardHeight),
  '4xl': RFValue(26, standardHeight),
  '5xl': RFValue(28, standardHeight),
  '6xl': RFValue(30, standardHeight),
  '7xl': RFValue(32, standardHeight),
  '8xl': RFValue(34, standardHeight),
  '9xl': RFValue(36, standardHeight),
  '10xl': RFValue(38, standardHeight),
  '11xl': RFValue(40, standardHeight),
  '12xl': RFValue(44, standardHeight),
  '13xl': RFValue(48, standardHeight),
  '14xl': RFValue(52, standardHeight),
  '15xl': RFValue(56, standardHeight),
  '16xl': RFValue(60, standardHeight),
};

const fontFamily = {
  Plus_Jakarta_Sans_400: 'System',
  Plus_Jakarta_Sans_500: 'System',
  Plus_Jakarta_Sans_600: 'System',
  Plus_Jakarta_Sans_700: 'System',
  Plus_Jakarta_Sans_800: 'System',
  Plus_Jakarta_Sans_900: 'System',
};

export default {
  fontSize,
  fontFamily,
};
