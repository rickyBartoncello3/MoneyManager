import {FlatList, View} from 'react-native';
import {useAccountsQuery} from '../queries/useAccountsQuery';
import Text from '@/src/shared/components/ui/Text/Text';
import {AccountRow} from '@/src/features/dashboard/components/AccountRow/AccountRow';
import React from 'react';
import {CustomView} from '@/src/shared/components/ui/CustomView';
import {useCategoriesQuery} from '@/src/features/categories/queries/useCategoriesQuery';
import {CategoryRow} from '@/src/features/dashboard/components/CategoryRow/CategoryRow';
import {getRandomInt} from '@/src/shared/utils/getRandomInt';

export function AccountsScreen() {
  const {data: accounts = [], isLoading} = useAccountsQuery();
  const {data: categories = []} = useCategoriesQuery();

  if (isLoading) {
    return (
      <View>
        <Text size={12} weight={300}>
          Loading accounts...
        </Text>
      </View>
    );
  }

  return (
    <CustomView margin>
      <Text size={12} weight={300}>
        Accounts
      </Text>

      <View style={{flex: 1, gap: 8}}>
        {categories.map(category =>
          category.type === 'expense' ? (
            <CategoryRow
              key={category.id}
              category={{
                id: category.id,
                name: category.name,
                total: getRandomInt(0, 1000000),
                percentage: getRandomInt(0, 100),
                color: category.color,
              }}
              currencySymbol={'$'}
              onPress={() => {}}
            />
          ) : null,
        )}
      </View>

      <FlatList
        data={accounts}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <AccountRow
            account={{
              id: item.id,
              balance: item.initialBalanceMinor,
              currency: item.currencyCode,
              name: item.name,
              type: item.type,
              mainCurrency: 'ARS',
            }}
            onPress={() => {}}
          />
        )}
      />
    </CustomView>
  );
}
