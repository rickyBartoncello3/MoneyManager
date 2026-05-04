import React from 'react';
import styles from './CircularProgress.styles.ts';
import {ChipProps} from './interfaces.ts';
import {View} from 'react-native';
import Text from '../Text/Text.tsx';

export const Chip = ({text, backgroundColor, color}: ChipProps) => {
  return (
    <View
      style={[
        styles.root,
        {
          backgroundColor: backgroundColor || 'transparent',
        },
      ]}
    >
      <View
        style={[
          styles.badgeDot,
          {
            backgroundColor: color || 'transparent',
          },
        ]}
      />
      <Text
        size={12}
        weight={700}
        style={[
          {
            color: color,
          },
        ]}
      >
        {text}
      </Text>
    </View>
  );
};
