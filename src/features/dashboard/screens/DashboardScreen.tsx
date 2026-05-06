import {Text, View} from 'react-native';
import styles from './Dashboard.styles';
import {useContext, useMemo} from 'react';
import {CustomView} from '@/src/shared/components/ui/CustomView';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import {getRandomInt} from '@/src/shared/utils/getRandomInt';
import {HeroCard} from '@/src/features/dashboard/components/HeroCard/HeroCard';
import {Highlights} from '@/src/shared/components/ui/Highlight/Highlight';
import {CategoriesSummary} from '@/src/features/dashboard/components/CategoriesSummary/CategoriesSummary';
import {AccountsSummary} from '@/src/features/dashboard/components/AccountsSummary/AccountsSummary';
import {useCategoriesQuery} from '@/src/features/categories/queries/useCategoriesQuery';
import {useUsdToArsQuery} from '@/src/features/exchangeRates/queries/useUsdToArsQuery';
import {useAccountsQuery} from '@/src/features/accounts/queries/useAccountsQuery';
import {HighlightItem} from '@/src/shared/components/ui/Highlight/interfaces';
import {useCategoryBreakdownQuery} from '@/src/features/transactions/queries/useCategoryBreakdownQuery';
import {router} from 'expo-router';

export const DashboardScreen = () => {
  const {colors} = useContext(ThemeContext);
  const {data: categoriesDto = []} = useCategoriesQuery();
  const {data: accountsList = []} = useAccountsQuery();
  const {data: usdToArs = []} = useUsdToArsQuery();
  const {data: categorySummary = []} = useCategoryBreakdownQuery();

  let expenseSummary = categorySummary.filter(c => c.type === 'expense' && c.total > 0);
  const totalSpend = expenseSummary.reduce((sum, item) => sum + item.total, 0);
  expenseSummary = expenseSummary
    .map(c => {
      const {color, name} = categoriesDto.find(category => category.id === c.id)!;
      return {
        ...c,
        id: c.id,
        color,
        name,
        percentage:
          totalSpend > 0 ? Number(((c.total / totalSpend) * 100).toFixed(1)) : 0,
      };
    })
    .sort((a, b) => b.total - a.total);

  const totalSave = categorySummary
    .filter(c => c.type === 'income')
    .reduce((sum, item) => sum + item.total, 0);

  const accounts = useMemo(() => {
    return accountsList.map(account => {
      const amount = getRandomInt(0, 1000);
      return {
        id: account.id,
        name: account.name,
        type: account.type,
        currency: account.currencyCode,
        balance: account.type === 'creditCard' ? -amount : amount,
        equivalentInMainCurrency:
          account.currencyCode === 'USD' && usdToArs
            ? amount * Number(usdToArs.sell)
            : undefined,
        mainCurrency: 'ARS',
      };
    });
  }, [accountsList, usdToArs]);

  const items: HighlightItem[] = [
    {
      id: 'weekly-spending',
      title: 'Gasto semanal',
      subtitle: 'vs. semana anterior',
      value: getRandomInt(-10, 10),
      chartType: 'bar',
    },
    {
      id: 'monthly-spending',
      title: 'Gasto mensual',
      subtitle: 'vs. mes anterior',
      value: getRandomInt(-10, 10),
      chartType: 'line',
    },
  ];

  return (
    <CustomView margin>
      <View style={styles.container}>
        <View>
          <Text style={{color: colors.text}}>Home</Text>
        </View>
        <View>
          <Text style={{color: colors.text}}>May 2026</Text>
        </View>
        <View>
          <Text style={{color: colors.text}}>Home</Text>
        </View>
      </View>
      <View style={{gap: 8, marginBottom: 130}}>
        <HeroCard
          currentBalance={totalSave - totalSpend}
          spent={totalSpend}
          monthlyBudget={totalSave}
        />
        <Highlights highlightedItems={items} />

        <CategoriesSummary
          categories={expenseSummary}
          maxVisible={6}
          onPressShowMore={() => {
            console.log('Mostrar todas las categorías');
          }}
          onPressCategory={category => {
            router.push({
              pathname: '/(tabs)/transactions',
              params: {categoryId: category.id},
            });
          }}
        />
        <AccountsSummary
          accounts={accounts}
          mainCurrency="ARS"
          onPressSeeAll={() => {
            console.log('Ver todas las cuentas');
          }}
          onPressAccount={account => {
            console.log('Cuenta seleccionada:', account.name);
          }}
        />
      </View>
    </CustomView>
  );
};
