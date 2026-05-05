import {View} from 'react-native';
import Text from '@/src/shared/components/ui/Text/Text';
import {Transaction} from '@/src/domain/transactions/Transaction';

type Props = {
  transaction: Transaction;
};

export function TransactionItem({transaction}: Props) {
  const sign = transaction.type === 'income' ? '+' : '-';

  return (
    <View style={{paddingVertical: 12, flexDirection: 'row', gap: 12}}>
      <Text size={16} weight={500}>
        {sign}
        {transaction.amount.amount} {transaction.amount.currency}
      </Text>

      <Text size={16} weight={500}>
        {transaction.note ?? transaction.type}
      </Text>
      <Text size={16} weight={500}>
        {transaction.type}
      </Text>

      <Text size={16} weight={500}>
        {transaction.categoryId}
      </Text>
    </View>
  );
}
