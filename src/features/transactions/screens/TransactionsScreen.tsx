import {ActivityIndicator, FlatList, View} from 'react-native';
import Text from '@/src/shared/components/ui/Text/Text';
import {useTransactionsQuery} from '../queries/useTransactionsQuery';
import {TransactionItem} from '../components/TransactionItem';
import {CustomView} from '@/src/shared/components/ui/CustomView';
import {useCreateTransactionMutation} from '@/src/features/transactions/queries/useCreateTransactionMutation';
import {Button} from '@/src/shared/components/ui/Button';
import {CategoryType} from '@/src/domain/categories/CategoryType';
import {useCategoriesQuery} from '@/src/features/categories/queries/useCategoriesQuery';
import {useMemo} from 'react';
import {now} from '@/src/core/date/now';
import {getRandomInt} from '@/src/shared/utils/getRandomInt';

export function TransactionsScreen() {
  const {data: transactions = [], isLoading, error} = useTransactionsQuery();
  const createTransactionMutation = useCreateTransactionMutation();
  const {data: categories} = useCategoriesQuery();

  const randomWord = (words: string[]) => {
    return words[Math.floor(Math.random() * words.length)];
  };

  const type = randomWord(['expense', 'income']) as CategoryType;

  const categoriesSelected = useMemo(
    () => categories?.filter(c => c.type === type).map(c => c.id),
    [categories],
  ) || ['category_not_found'];

  const category = randomWord(categoriesSelected || ['cat_salary']);

  const amount = getRandomInt(0, 1000);

  const handleCreateMock = () => {
    createTransactionMutation.mutate({
      amount: amount,
      currency: 'ARS',
      accountId: 'acc_cash_ars',
      categoryId: category,
      occurredAt: now(),
      note: type === 'income' ? 'Mock income' : 'Mock expense',
      type: type,
      mainCurrency: 'ARS',
      exchangeRateToMainCurrency: 0,
    });
  };

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text size={22} weight={900}>
          Something went wrong.
        </Text>
      </View>
    );
  }

  return (
    <CustomView>
      <Text size={22} weight={900}>
        Transactions
      </Text>

      <FlatList
        data={transactions}
        keyExtractor={item => item.id}
        renderItem={({item}) => <TransactionItem transaction={item} />}
      />
      <Button text={'Press'} onPress={handleCreateMock} />
    </CustomView>
  );
}
