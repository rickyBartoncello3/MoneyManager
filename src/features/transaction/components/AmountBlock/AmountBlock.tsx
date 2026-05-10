import React, {useContext, useMemo} from 'react';

import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import Text from '@/src/shared/components/ui/Text/Text';
import styles from './AmountBlock.styles';
import {TouchableOpacity} from 'react-native';
import {AmountBlockProps} from '@/src/features/transaction/components/AmountBlock/interfaces';
import {Card} from '@/src/shared/components/ui/Card/Card';

export const AmountBlock = ({amount, onPress}: AmountBlockProps) => {
  const {colors} = useContext(ThemeContext);

  const currentValue = useMemo(() => {
    const parts = amount.split(/[+\-×\/]/).filter(Boolean);

    return parts.at(-1) || '';
  }, [amount]);

  return (
    <Card>
      <TouchableOpacity onPress={onPress} style={styles.root}>
        <Text weight={700} size={12} style={styles.amountLabel}>
          Amount
        </Text>
        <Text size={44} weight={900} style={[styles.amount, {color: colors.primary}]}>
          {currentValue}
        </Text>
      </TouchableOpacity>
    </Card>
  );
};
