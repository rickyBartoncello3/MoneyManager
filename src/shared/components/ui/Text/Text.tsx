import {Text as RNText} from 'react-native';
import React, {FC, useMemo} from 'react';
import styles from './Text.styles';
import {TextProps} from './interfaces';
import typography from '@/src/shared/theme/typography';

export const fontFamilyMap: {[key: number]: string} = {
  400: typography.fontFamily.Plus_Jakarta_Sans_400,
  500: typography.fontFamily.Plus_Jakarta_Sans_500,
  600: typography.fontFamily.Plus_Jakarta_Sans_600,
  700: typography.fontFamily.Plus_Jakarta_Sans_700,
  800: typography.fontFamily.Plus_Jakarta_Sans_800,
  900: typography.fontFamily.Plus_Jakarta_Sans_800,
};

export const fontSizeMap: {[key: number]: number} = {
  8: typography.fontSize.xll_small_8,
  10: typography.fontSize.xl_small_10,
  12: typography.fontSize.x_small_12,
  14: typography.fontSize.small_14,
  16: typography.fontSize.regular_16,
  18: typography.fontSize.x_regular_18,
  20: typography.fontSize.xl_regular_20,
  22: typography.fontSize.xxl_regular_22,
  24: typography.fontSize.large_24,
  28: typography.fontSize.extraLarge_28,
  32: typography.fontSize.extra_extra_large_32,
  40: typography.fontSize.extraExtraLarge_40,
};

export const lineHeightMap: {[key: number]: number} = {
  8: 10,
  10: 14,
  12: 14,
  14: 20,
  16: 24,
  18: 24,
  20: 28,
  24: 36,
  28: 40,
  32: 44,
  40: 46,
};

const DEFAULT_SIZE = 16;
const DEFAULT_WEIGHT = 400;

const Text: FC<TextProps> = ({size, weight, style, ...props}) => {
  const dynamicStyle = useMemo(() => {
    const selectedFontFamily = fontFamilyMap[weight] || fontFamilyMap[DEFAULT_WEIGHT];
    const selectedFontSize = fontSizeMap[size] || fontSizeMap[DEFAULT_SIZE];
    const selectedLineHeight = lineHeightMap[size] || lineHeightMap[DEFAULT_SIZE];

    return {
      fontFamily: selectedFontFamily,
      fontSize: selectedFontSize,
      lineHeight: selectedLineHeight,
    };
  }, [size, weight]);

  const accessibilityLabel = useMemo(() => {
    return props.children && typeof props.children === 'string'
      ? `Text '${props.children}'`
      : undefined;
  }, [props.children]);

  return (
    <RNText
      {...props}
      style={[styles.textDefault, dynamicStyle, style]}
      accessibilityLabel={accessibilityLabel}
    >
      {props.children}
    </RNText>
  );
};

export default Text;
