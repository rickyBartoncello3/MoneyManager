import {Dimensions} from 'react-native';

interface DimensionsProps {
  width: number;
  height: number;
}

export const standardWidth: number = 360;
export const standardHeight: number = 800;

export const imageStandardWidth: number = 328;
export const imageStandardHeight: number = 185;

const horizontalScale = (size: number): number => (width / standardWidth) * size;
const verticalScale = (size: number): number => (height / standardHeight) * size;
const moderateScale = (size: number, factor: number = 0.5): number =>
  size + (horizontalScale(size) - size) * factor;
const verticalModerateScale = (size: number, factor: number = 0.5): number =>
  size + (verticalScale(size) - size) * factor;

export {horizontalScale, verticalScale, moderateScale, verticalModerateScale};
export const {width, height}: DimensionsProps = Dimensions.get('window');
