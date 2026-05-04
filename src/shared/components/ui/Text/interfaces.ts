import {TextProps as RNTextProps} from 'react-native';
import {fontFamilyMap, fontSizeMap} from './Text.tsx';

export interface TextProps extends RNTextProps {
  size: keyof typeof fontSizeMap;
  weight: keyof typeof fontFamilyMap;
}
