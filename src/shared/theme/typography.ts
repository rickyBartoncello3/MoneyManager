import {RFValue} from 'react-native-responsive-fontsize';
import {standardHeight} from '@/src/shared/theme/scaling';

const fontSize = {
  xll_small_8: RFValue(8, standardHeight),
  xl_small_10: RFValue(10, standardHeight),
  x_small_12: RFValue(12, standardHeight),
  small_14: RFValue(14, standardHeight),
  regular_16: RFValue(16, standardHeight),
  x_regular_18: RFValue(18, standardHeight),
  xl_regular_20: RFValue(20, standardHeight),
  xxl_regular_22: RFValue(22, standardHeight),
  large_24: RFValue(24, standardHeight),
  extraLarge_28: RFValue(28, standardHeight),
  extra_extra_large_32: RFValue(32, standardHeight),
  extraExtraLarge_40: RFValue(40, standardHeight),
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
