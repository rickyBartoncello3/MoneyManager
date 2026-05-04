import React from 'react';
import {View} from 'react-native';
import styles from './MiniBarChart.styles';
import {MiniBarChartProps} from './interfaces.ts';

export const MiniBarChart = ({values, color, mutedColor}: MiniBarChartProps) => {
  const maxValue = Math.max(...values, 1);

  return (
    <View style={styles.container}>
      {values.map((value, index) => {
        const height = Math.max((value / maxValue) * 32, 6);

        return (
          <View key={`${value}-${index}`} style={styles.barWrapper}>
            <View
              style={[
                styles.bar,
                {
                  height,
                  backgroundColor: index === values.length - 1 ? color : mutedColor,
                },
              ]}
            />
          </View>
        );
      })}
    </View>
  );
};
