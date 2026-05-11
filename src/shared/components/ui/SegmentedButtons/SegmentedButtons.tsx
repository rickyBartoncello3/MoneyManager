import React, {use} from 'react';
import {SegmentedButtonsProps} from './interfaces';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import {SegmentedButtons as RNSegmentedButtons} from 'react-native-paper';

export const SegmentedButtons = ({
  initialValue,
  handleOnChange,
  values,
}: SegmentedButtonsProps) => {
  const {colors} = use(ThemeContext);

  return (
    <RNSegmentedButtons
      theme={{
        colors: {
          secondaryContainer: colors.primary,
          onSecondaryContainer: colors.text,
          primary: colors.primary,
          outline: colors.border,
        },
      }}
      value={initialValue}
      onValueChange={handleOnChange}
      buttons={values}
    />
  );
};
