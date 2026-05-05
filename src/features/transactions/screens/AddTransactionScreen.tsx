import {Button} from 'react-native';
import {useLocalSearchParams, router} from 'expo-router';
import {AppScreen} from '@/src/shared/components/AppScreen';
import Text from '@/src/shared/components/ui/Text/Text';
import {useAddTransactionViewModel} from '../hooks/useAddTransactionViewModel';

export function AddTransactionScreen() {
  const params = useLocalSearchParams<{type?: 'income' | 'expense'}>();
  const type = params.type ?? 'expense';

  const vm = useAddTransactionViewModel(type);

  function handleCreateMock() {
    vm.submit({
      amount: type === 'income' ? 100000 : 2500,
      currency: 'ARS',
      accountId: 'acc_cash_ars',
      categoryId: type === 'income' ? 'cat_salary' : 'cat_food',
      occurredAt: new Date().toISOString(),
      note: type === 'income' ? 'Mock income' : 'Mock expense',
    });

    router.back();
  }

  return (
    <AppScreen>
      <Text>{type === 'income' ? 'Add income' : 'Add expense'}</Text>

      <Button
        title="Create mock transaction"
        onPress={handleCreateMock}
        disabled={vm.isSaving}
      />
    </AppScreen>
  );
}
