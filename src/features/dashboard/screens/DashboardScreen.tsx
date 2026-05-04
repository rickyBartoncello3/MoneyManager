import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useContext, useMemo} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CustomView} from '@/src/shared/components/ui/CustomView';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import {getRandomInt} from '@/src/shared/utils/getRandomInt';
import {HeroCard} from '@/src/features/dashboard/components/HeroCard/HeroCard';
import {Highlights} from '@/src/features/dashboard/components/Highlight/Highlight';
import {CategoriesSummary} from '@/src/features/dashboard/components/CategoriesSummary/CategoriesSummary';
import {AccountsSummary} from '@/src/features/dashboard/components/AccountsSummary/AccountsSummary';
import {useCategoriesQuery} from '@/src/features/categories/queries/useCategoriesQuery';
import {useUsdToArsQuery} from '@/src/features/exchangeRates/queries/useUsdToArsQuery';
import {useAccountsQuery} from '@/src/features/accounts/queries/useAccountsQuery';

export const DashboardScreen = () => {
  const {colors} = useContext(ThemeContext);
  const {top} = useSafeAreaInsets();
  const {data: categoriesDto = []} = useCategoriesQuery();
  const {data: accountsList = []} = useAccountsQuery();
  const {data: usdToArs} = useUsdToArsQuery();

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
            ? amount * Number(usdToArs.rate)
            : undefined,
        mainCurrency: 'ARS',
      };
    });
  }, [accountsList, usdToArs]);

  const categories = useMemo(() => {
    let remainingAmount = 1000;

    const categoriesWithAmount = categoriesDto
      .filter(category => category.type === 'expense')
      .map(category => {
        const amount = getRandomInt(0, remainingAmount);

        remainingAmount -= amount;

        return {
          ...category,
          amount,
        };
      });

    const totalAmount = categoriesWithAmount.reduce(
      (sum, category) => sum + category.amount,
      0,
    );

    return categoriesWithAmount
      .map(category => ({
        ...category,
        percentage:
          totalAmount > 0
            ? Number(((category.amount / totalAmount) * 100).toFixed(1))
            : 0,
      }))
      .sort((a, b) => b.amount - a.amount)
      .filter(category => category.amount > 0);
  }, [categoriesDto]);

  const monthlyBudget = getRandomInt(0, 1000000);
  const spent = getRandomInt(0, monthlyBudget);

  return (
    <CustomView margin>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: top,
            borderWidth: 1,
            paddingVertical: 8,
            marginBottom: 8,
          }}
        >
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

        <View style={{gap: 8, marginBottom: 100}}>
          <HeroCard
            currentBalance={monthlyBudget - spent}
            spent={spent}
            monthlyBudget={monthlyBudget}
          />
          <Highlights
            weeklyPercentage={getRandomInt(-10, 10)}
            monthlyPercentage={getRandomInt(-10, 10)}
            weeklyValues={[32000, 28000, 42000, 36000, 30000, 25000, 22000]}
            monthlyValues={[360000, 390000, 410000, 420000]}
          />

          <CategoriesSummary
            categories={categories}
            maxVisible={6}
            onPressShowMore={() => {
              console.log('Mostrar todas las categorías');
            }}
            onPressCategory={category => {
              console.log('Categoría seleccionada:', category.name);
            }}
          />
          <AccountsSummary
            accounts={accounts}
            mainCurrency="ARS"
            onPressSeeAll={() => {
              console.log('Ver todas las cuentas');
            }}
            onPressAccount={account => {
              console.log(usdToArs?.rate);
              console.log('Cuenta seleccionada:', account.name);
            }}
          />
        </View>
      </ScrollView>
    </CustomView>
  );
};
