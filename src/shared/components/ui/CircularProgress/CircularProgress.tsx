import React from 'react';
import {View} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import styles from './CircularProgress.styles';
import Text from '../Text/Text';
import {CircularProgressProps} from './interfaces';
import {useTranslation} from 'react-i18next';

export const CircularProgress = ({
  progress,
  size = 100,
  strokeWidth = 8,
  color,
  trackColor,
  textColor,
}: CircularProgressProps) => {
  const {t} = useTranslation();
  const normalizedProgress = Math.min(Math.max(progress, 0), 1);

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference * (1 - normalizedProgress);

  const percentage = Math.round(normalizedProgress * 100);

  return (
    <View style={{width: size, height: size}}>
      <Svg width={size} height={size}>
        <Circle
          stroke={trackColor}
          fill="transparent"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke={color}
          fill="transparent"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </Svg>
      <View style={styles.content}>
        <Text size={18} weight={500} style={[styles.percentage, {color: textColor}]}>
          {percentage}%
        </Text>
        <Text size={14} weight={500} style={[styles.label, {color: textColor}]}>
          {t('dashboard.spent')}
        </Text>
      </View>
    </View>
  );
};
