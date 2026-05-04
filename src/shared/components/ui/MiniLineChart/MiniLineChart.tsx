import React from 'react';
import {View} from 'react-native';
import Svg, {Circle, Path} from 'react-native-svg';
import {MiniLineChartProps} from './interfaces.ts';

export const MiniLineChart = ({
  values,
  color,
  mutedColor,
  width = 96,
  height = 36,
}: MiniLineChartProps) => {
  const maxValue = Math.max(...values, 1);
  const minValue = Math.min(...values);

  const range = maxValue - minValue || 1;

  const points = values.map((value, index) => {
    const x = (index / Math.max(values.length - 1, 1)) * width;
    const y = height - ((value - minValue) / range) * height;

    return {x, y};
  });

  const path = points
    .map((point, index) => {
      return `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`;
    })
    .join(' ');

  return (
    <View style={{marginTop: 12}}>
      <Svg width={width} height={height}>
        <Path
          d={`M 0 ${height - 1} L ${width} ${height - 1}`}
          stroke={mutedColor}
          strokeWidth={1}
        />

        <Path
          d={path}
          stroke={color}
          strokeWidth={3}
          fill="transparent"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {points.map((point, index) => {
          const isLast = index === points.length - 1;

          return (
            <Circle
              key={`${point.x}-${point.y}-${index}`}
              cx={point.x}
              cy={point.y}
              r={isLast ? 4 : 2.5}
              fill={isLast ? color : mutedColor}
            />
          );
        })}
      </Svg>
    </View>
  );
};
