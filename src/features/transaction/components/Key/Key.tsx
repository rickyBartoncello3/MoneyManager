import React from 'react';

import Text from '@/src/shared/components/ui/Text/Text';

import styles from './Key.styles';
import {KeyProps} from '@/src/features/transaction/components/Key/interfaces';
import {TouchableRipple} from 'react-native-paper';

export const Key = ({key, keyItem, handlePressKey}: KeyProps) => {
  const isEqual = keyItem === '=';
  const isOperator = ['+', '-', '×', '/', '⌫'].includes(keyItem);

  return (
    <TouchableRipple
      borderless
      key={key}
      onPress={() => handlePressKey(keyItem)}
      style={[
        styles.keyButton,
        isOperator && styles.operatorButton,
        isEqual && styles.equalButton,
      ]}
    >
      <Text
        size={isEqual ? 20 : 18}
        weight={800}
        style={isEqual ? {color: 'white'} : undefined}
      >
        {keyItem}
      </Text>
    </TouchableRipple>
  );
};
