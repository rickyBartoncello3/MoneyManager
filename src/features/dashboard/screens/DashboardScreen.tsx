import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useContext} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CustomView} from '@/src/shared/components/ui/CustomView';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import {getRandomInt} from '@/src/shared/utils/getRandomInt';
import {HeroCard} from '@/src/features/dashboard/components/HeroCard/HeroCard';
import {Highlights} from '@/src/features/dashboard/components/Highlight/Highlight';
import {CategoriesSummary} from '@/src/features/dashboard/components/CategoriesSummary/CategoriesSummary';
import {CategoryItem} from '@/src/features/dashboard/components/CategoriesSummary/interfaces';
import {AccountsSummary} from '@/src/features/dashboard/components/AccountsSummary/AccountsSummary';
import {AccountItem} from '@/src/features/dashboard/components/AccountsSummary/interfaces';

export const DashboardScreen = () => {
  const {colors} = useContext(ThemeContext);
  const {top} = useSafeAreaInsets();

  const monthlyBudget = getRandomInt(0, 1000000);
  const spent = getRandomInt(0, monthlyBudget);

  const categories: CategoryItem[] = [
    {
      id: 'food',
      name: 'Comida',
      amount: 120000,
      percentage: 29,
      color: '#22C55E',
    },
    {
      id: 'transport',
      name: 'Transporte',
      amount: 75000,
      percentage: 18,
      color: '#2563EB',
    },
    {
      id: 'home',
      name: 'Casa',
      amount: 60000,
      percentage: 14,
      color: '#FACC15',
    },
    {
      id: 'outings',
      name: 'Salidas',
      amount: 45000,
      percentage: 11,
      color: '#F43F5E',
    },
    {
      id: 'health',
      name: 'Salud',
      amount: 30000,
      percentage: 7,
      color: '#8B5CF6',
    },
    {
      id: 'others',
      name: 'Otros',
      amount: 30000,
      percentage: 7,
      color: '#CBD5E1',
    },
    {
      id: 'subscriptions',
      name: 'Suscripciones',
      amount: 25000,
      percentage: 6,
      color: '#FB923C',
    },
    {
      id: 'shopping',
      name: 'Compras',
      amount: 20000,
      percentage: 5,
      color: '#06B6D4',
    },
    {
      id: 'pets',
      name: 'Mascotas',
      amount: 10000,
      percentage: 2,
      color: '#A855F7',
    },
    {
      id: 'travel',
      name: 'Viajes',
      amount: 5000,
      percentage: 1,
      color: '#64748B',
    },
  ];

  const accounts: AccountItem[] = [
    {
      id: 'cash-ars',
      name: 'Efectivo pesos',
      type: 'cash',
      currency: 'ARS',
      balance: monthlyBudget,
      mainCurrency: 'ARS',
    },
    {
      id: 'cash-usd',
      name: 'Efectivo dólar',
      type: 'cash',
      currency: 'USD',
      balance: getRandomInt(0, 1000),
      equivalentInMainCurrency: 481900,
      mainCurrency: 'ARS',
    },
    {
      id: 'bbva-visa',
      name: 'Visa',
      type: 'creditCard',
      currency: 'ARS',
      balance: getRandomInt(-100000, 0),
      mainCurrency: 'ARS',
    },
    {
      id: 'bbva-mastercard',
      name: 'Mastercard',
      type: 'creditCard',
      currency: 'ARS',
      balance: getRandomInt(-100000, 0),
      mainCurrency: 'ARS',
    },
  ];
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
              console.log('Cuenta seleccionada:', account.name);
            }}
          />
        </View>
      </ScrollView>
    </CustomView>
  );
};
