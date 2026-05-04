import React from 'react';
import styles from './DonutChart.styles.ts';
import {View} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import Text from '../Text/Text.tsx';
import {DonutChartProps} from './interfaces.ts';

export const DonutChart = ({
  categories,
  size = 118,
  strokeWidth = 16,
  centerLabel = 'Total',
  centerValue,
  textColor,
  mutedTextColor,
  trackColor,
}: DonutChartProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  let accumulatedPercentage = 0;

  return (
    <View style={{width: size, height: size}}>
      <Svg width={size} height={size}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={trackColor}
          strokeWidth={strokeWidth}
          fill="transparent"
        />

        {categories.map(category => {
          const dashLength = circumference * (category.percentage / 100);
          const dashOffset = circumference * (1 - accumulatedPercentage / 100);

          accumulatedPercentage += category.percentage;

          return (
            <Circle
              key={category.id}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={category.color}
              strokeWidth={strokeWidth}
              fill="transparent"
              strokeDasharray={`${dashLength} ${circumference}`}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
              rotation="-90"
              origin={`${size / 2}, ${size / 2}`}
            />
          );
        })}
      </Svg>

      <View style={styles.centerContent}>
        {centerValue ? (
          <Text
            size={15}
            weight={900}
            numberOfLines={1}
            style={[
              styles.centerValue,
              {
                color: textColor,
              },
            ]}
          >
            {centerValue}
          </Text>
        ) : null}

        <Text
          size={10}
          weight={600}
          numberOfLines={1}
          style={[
            styles.centerLabel,
            {
              color: mutedTextColor,
            },
          ]}
        >
          {centerLabel}
        </Text>
      </View>
    </View>
  );
};
