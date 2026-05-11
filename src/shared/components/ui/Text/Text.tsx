import {Text as RNText} from 'react-native';
import React, {FC, use, useMemo} from 'react';
import styles from './Text.styles';
import {TextProps} from './interfaces';
import typography from '@/src/shared/theme/typography';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import {verticalScale} from '@/src/shared/theme/scaling';

export const fontFamilyMap: {[key: number]: string} = {
  400: typography.fontFamily.Plus_Jakarta_Sans_400,
  500: typography.fontFamily.Plus_Jakarta_Sans_500,
  600: typography.fontFamily.Plus_Jakarta_Sans_600,
  700: typography.fontFamily.Plus_Jakarta_Sans_700,
  800: typography.fontFamily.Plus_Jakarta_Sans_800,
  900: typography.fontFamily.Plus_Jakarta_Sans_800,
};

export const fontSizeMap: {[key: number]: number} = {
  8: typography.fontSize.xxs,
  10: typography.fontSize.xs,
  12: typography.fontSize.sm,
  14: typography.fontSize.md,
  16: typography.fontSize.base,
  18: typography.fontSize.lg,

  20: typography.fontSize.xl,
  22: typography.fontSize['2xl'],
  24: typography.fontSize['3xl'],
  26: typography.fontSize['4xl'],
  28: typography.fontSize['5xl'],
  30: typography.fontSize['6xl'],
  32: typography.fontSize['7xl'],
  34: typography.fontSize['8xl'],
  36: typography.fontSize['9xl'],
  38: typography.fontSize['10xl'],
  40: typography.fontSize['11xl'],
  44: typography.fontSize['12xl'],
  48: typography.fontSize['13xl'],
  52: typography.fontSize['14xl'],
  56: typography.fontSize['15xl'],
  60: typography.fontSize['16xl'],
};

export const lineHeightMap: {[key: number]: number} = {
  8: verticalScale(10),
  10: verticalScale(14),
  12: verticalScale(16),
  14: verticalScale(20),
  16: verticalScale(24),
  18: verticalScale(26),

  20: verticalScale(28),
  22: verticalScale(30),
  24: verticalScale(32),
  26: verticalScale(36),
  28: verticalScale(40),
  30: verticalScale(42),

  32: verticalScale(44),
  34: verticalScale(46),
  36: verticalScale(48),
  38: verticalScale(52),
  40: verticalScale(56),

  44: verticalScale(60),
  48: verticalScale(64),
  52: verticalScale(68),
  56: verticalScale(72),
  60: verticalScale(76),
};

const DEFAULT_SIZE = 16;
const DEFAULT_WEIGHT = 400;

const Text: FC<TextProps> = ({size, weight, style, ...props}) => {
  const {colors} = use(ThemeContext);
  const dynamicStyle = useMemo(() => {
    const selectedFontFamily = fontFamilyMap[weight] || fontFamilyMap[DEFAULT_WEIGHT];
    const selectedFontSize = fontSizeMap[size] || fontSizeMap[DEFAULT_SIZE];
    const selectedLineHeight = lineHeightMap[size] || lineHeightMap[DEFAULT_SIZE];

    return {
      fontFamily: selectedFontFamily,
      fontSize: selectedFontSize,
      lineHeight: selectedLineHeight,
      color: colors.text,
    };
  }, [size, weight, colors.text]);

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
