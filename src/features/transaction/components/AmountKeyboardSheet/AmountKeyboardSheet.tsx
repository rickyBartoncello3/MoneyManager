import React, {useContext, useMemo, useState} from 'react';
import {Pressable, View} from 'react-native';

import Text from '@/src/shared/components/ui/Text/Text';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';

import styles from './AmountKeyboardSheet.styles';
import {AmountKeyboardSheetProps} from '@/src/features/transaction/components/AmountKeyboardSheet/interfaces';
import {BottomSheetModal} from '@/src/shared/components/ui/BottomSheetModal/BottomSheetModal';
import {Button} from '@/src/shared/components/ui/Button';
import {Key} from '@/src/features/transaction/components/Key/Key';

const smartButtons = ['+100', '+500', '+1,000'];
const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', ',', '0', '='];
const operators = ['+', '-', '×', '/', '⌫'];

export const AmountKeyboardSheet = ({
  bottomSheetRef,
  amount,
  onChangeAmount,
}: AmountKeyboardSheetProps) => {
  const {colors} = useContext(ThemeContext);
  const snapPoints = useMemo(() => [], []);

  const [expression, setExpression] = useState(amount);

  const handlePressKey = (key: string) => {
    if (key === '⌫') {
      const next = expression.slice(0, -1);
      setExpression(next);
      onChangeAmount(next || '0');
      return;
    }

    if (key === '=') {
      try {
        const safeExpression = expression.replace(/,/g, '.').replace(/×/g, '*');

        if (!/^[0-9+\-*/. ]+$/.test(safeExpression)) return;

        const result = Function(`"use strict"; return (${safeExpression})`)();

        const next = Number(result).toFixed(2);

        setExpression(next);
        onChangeAmount(next);
      } catch {
        return;
      }

      return;
    }

    const next = expression === '0' ? key : `${expression}${key}`;
    setExpression(next);
    onChangeAmount(next);
  };

  const handleSmartAdd = (value: string) => {
    const numericValue = Number(value.replace('+', '').replace(',', ''));
    const current = Number(expression.replace(',', '.')) || 0;
    const next = String(current + numericValue);

    setExpression(next);
    onChangeAmount(next);
  };

  return (
    <BottomSheetModal bottomSheetRef={bottomSheetRef} snapPoints={snapPoints}>
      <View style={styles.root}>
        <View style={styles.smartAddRow}>
          {smartButtons.map(button => (
            <Pressable
              key={button}
              onPress={() => handleSmartAdd(button)}
              style={styles.smartAddButton}
            >
              <Text size={14} weight={800} style={{color: colors.primary}}>
                {button}
              </Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.keyboardGrid}>
          {operators.map((key, index) => (
            <Key key={index} keyItem={key} handlePressKey={handlePressKey} />
          ))}
        </View>
        <View style={styles.keyboardGrid}>
          {keys.map((key, index) => (
            <Key key={index} keyItem={key} handlePressKey={handlePressKey} />
          ))}
        </View>
        <Button text={'Save'} onPress={() => bottomSheetRef.current?.dismiss()} />
      </View>
    </BottomSheetModal>
  );
};
