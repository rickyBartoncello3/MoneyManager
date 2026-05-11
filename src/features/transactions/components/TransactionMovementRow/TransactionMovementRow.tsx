// src/features/transactions/components/TransactionMovementRow/TransactionMovementRow.tsx

import {View} from 'react-native';
import {router} from 'expo-router';
import Text from '@/src/shared/components/ui/Text/Text';
import styles from './TransactionMovementRow.styles';
import {TransactionMovementRowProps} from '@/src/features/transactions/components/TransactionMovementRow/interfaces';
import {TouchableRipple} from 'react-native-paper';
import {use, useContext} from 'react';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import {formatDay} from '@/src/features/transactions/screens/interfaces';

export const TransactionMovementRow = ({
  transaction,
  categories,
  symbol,
  groupMode,
}: TransactionMovementRowProps) => {
  const category = categories.find(item => item.id === transaction.categoryId);
  const {colors} = use(ThemeContext);

  const isIncome = transaction.type === 'income';

  return (
    <TouchableRipple
      onPress={() =>
        router.push({
          pathname: '/add-transaction',
          params: {transactionId: transaction.id},
        })
      }
    >
      <View style={styles.movementRow}>
        <View style={styles.movementIcon}>
          <Text
            size={16}
            weight={900}
            style={{color: isIncome ? colors.income : colors.expense}}
          >
            {'•'}
          </Text>
        </View>
        <View style={styles.movementInfo}>
          {groupMode === 'day' && (
            <Text size={14} weight={800} style={{color: colors.text}}>
              {category?.name ?? 'No category'}
            </Text>
          )}

          <Text size={12} weight={600} style={{color: colors.text}}>
            {transaction.note || category?.name || transaction.type}
          </Text>
          {groupMode === 'category' && (
            <Text size={14} weight={900} style={{color: colors.text}}>
              {symbol}
              {transaction.amount.amount.toFixed(3)}
            </Text>
          )}
        </View>
        <Text size={14} weight={900} style={{color: colors.text}}>
          {groupMode === 'day'
            ? `${symbol} ${transaction.amount.amount.toFixed(3)}`
            : `${formatDay(transaction.occurredAt)}`}
        </Text>
      </View>
    </TouchableRipple>
  );
};

//formatDay(transaction.occurredAt)
