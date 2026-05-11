// src/features/transactions/components/ExpandableTransactions/TransactionMovementRow.tsx

import {Pressable, View} from 'react-native';
import {router} from 'expo-router';
import Text from '@/src/shared/components/ui/Text/Text';
import {Transaction} from '@/src/domain/transactions/Transaction';
import {Category} from '@/src/domain/categories/Category';
import styles from '../../screens/TransactionsScreen.styles';

type TransactionMovementRowProps = {
  transaction: Transaction;
  categories: Category[];
};

export const TransactionMovementRow = ({
  transaction,
  categories,
}: TransactionMovementRowProps) => {
  const category = categories.find(item => item.id === transaction.categoryId);

  const isIncome = transaction.type === 'income';
  const sign = isIncome ? '+' : '-';

  return (
    <Pressable
      onPress={() => router.push(`/transaction/${transaction.id}`)}
      style={styles.movementRow}
    >
      <View
        style={[
          styles.movementIcon,
          {
            backgroundColor: category?.backgroundColor ?? 'rgba(148, 163, 184, 0.16)',
          },
        ]}
      >
        <Text size={16} weight={900} style={{color: category?.color}}>
          {category?.icon ?? '•'}
        </Text>
      </View>

      <View style={styles.movementInfo}>
        <Text size={14} weight={800}>
          {transaction.note || category?.name || transaction.type}
        </Text>

        <Text size={12} weight={600} style={styles.movementMeta}>
          {category?.name ?? 'No category'}
        </Text>
      </View>

      <Text
        size={14}
        weight={900}
        style={isIncome ? styles.incomeAmount : styles.expenseAmount}
      >
        {sign}
        {transaction.amount.amount.toFixed(0)} {transaction.amount.currency}
      </Text>
    </Pressable>
  );
};
