import React, {use, useContext, useMemo, useState} from 'react';
import {View} from 'react-native';

import Text from '@/src/shared/components/ui/Text/Text';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';

import styles from './AmountKeyboardSheet.styles';
import {AmountKeyboardSheetProps} from '@/src/features/transaction/components/AmountKeyboardSheet/interfaces';
import {BottomSheetModal} from '@/src/shared/components/ui/BottomSheetModal/BottomSheetModal';
import {Button} from '@/src/shared/components/ui/Button/Button';
import {Key} from '@/src/features/transaction/components/Key/Key';
import {TouchableRipple} from 'react-native-paper';

const smartAddButtons = ['+100', '+500', '+1,000'];
const numberKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', ',', '0', '='];
const operatorKeys = ['+', '-', '×', '/', '⌫'];

export const AmountKeyboardSheet = ({
  bottomSheetRef,
  amount,
  onChangeAmount,
}: AmountKeyboardSheetProps) => {
  const {colors} = use(ThemeContext);
  const snapPoints = useMemo(() => [], []);

  const [expression, setExpression] = useState(amount);

  const handlePressKey = (key: string) => {
    if (key === '⌫') {
      const next = expression.slice(0, -1);
      setExpression(next);
      onChangeAmount(next || '0');
      return;
    }

    const isOperator = operatorKeys.includes(key);
    const isOperation = /^\d+(\.\d+)?[+\-×\/]\d+(\.\d+)?$/.test(expression);

    if (key === '=' || (isOperation && isOperator)) {
      try {
        const safeExpression = expression.replace(/,/g, '.').replace(/×/g, '*');

        if (!/^[0-9+\-*/. ]+$/.test(safeExpression)) return;

        const result = Function(`"use strict"; return (${safeExpression})`)();

        const formattedResult = Number.isInteger(result)
          ? result.toString()
          : Number(result).toFixed(2);

        const next = isOperator ? `${formattedResult}${key}` : formattedResult;

        setExpression(next);
        onChangeAmount(next);
      } catch {
        return;
      }

      return;
    }

    const lastIndexIsOperation = operatorKeys.includes(expression[expression.length - 1]);

    const next =
      expression === '0'
        ? key
        : lastIndexIsOperation && !numberKeys.includes(key)
          ? expression
          : `${expression}${key}`;
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
          {smartAddButtons.map(button => (
            <TouchableRipple
              borderless
              key={button}
              onPress={() => handleSmartAdd(button)}
              style={styles.smartAddButton}
            >
              <Text size={14} weight={800} style={{color: colors.primary}}>
                {button}
              </Text>
            </TouchableRipple>
          ))}
        </View>

        <View style={styles.keyboardGrid}>
          {operatorKeys.map(key => (
            <Key key={key} keyItem={key} handlePressKey={handlePressKey} />
          ))}
        </View>

        <View style={styles.keyboardGrid}>
          {numberKeys.map(key => (
            <Key key={key} keyItem={key} handlePressKey={handlePressKey} />
          ))}
        </View>

        <Button text="Save" onPress={() => bottomSheetRef.current?.dismiss()} />
      </View>
    </BottomSheetModal>
  );
};
