import {ActivityIndicator, View} from 'react-native';
import styles from './Dashboard.styles';
import {use} from 'react';
import {CustomView} from '@/src/shared/components/ui/CustomView';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import {HeroCard} from '@/src/features/dashboard/components/HeroCard/HeroCard';
import {Highlights} from '@/src/shared/components/ui/Highlight/Highlight';
import {CategoriesSummary} from '@/src/features/dashboard/components/CategoriesSummary/CategoriesSummary';
import {AccountsSummary} from '@/src/features/dashboard/components/AccountsSummary/AccountsSummary';
import {router} from 'expo-router';
import {useDashboardViewModel} from '@/src/features/dashboard/hooks/useDashboardViewModel';
import Text from '@/src/shared/components/ui/Text/Text';

const DashboardScreen = () => {
  const {colors} = use(ThemeContext);
  const vm = useDashboardViewModel();

  if (vm.isLoading) {
    return (
      <CustomView>
        <ActivityIndicator size="large" />
      </CustomView>
    );
  }

  if (vm.error || !vm.data) {
    return (
      <CustomView>
        <Text size={22} weight={900}>
          Something went wrong.
        </Text>
      </CustomView>
    );
  }

  const dashboard = vm.data;

  return (
    <CustomView margin>
      <View style={styles.root}>
        <View>
          <Text size={22} weight={900} style={{color: colors.text}}>
            Home
          </Text>
        </View>
        <View>
          <Text size={22} weight={900} style={{color: colors.text}}>
            May 2026
          </Text>
        </View>
        <View>
          <Text size={22} weight={900} style={{color: colors.text}}>
            Home
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <HeroCard
          currentBalance={dashboard.currentBalance!}
          spent={dashboard.spentThisMonth || 0}
          monthlyBudget={dashboard.available || 0}
          progress={dashboard.budgetProgress!}
        />

        <Highlights highlightedItems={dashboard.spendingInsight} />

        <CategoriesSummary
          categories={dashboard.categories || []}
          maxVisible={6}
          onPressShowMore={() => {
            router.push({
              pathname: '/(tabs)/transactions',
            });
          }}
          onPressCategory={category => {
            router.push({
              pathname: '/(tabs)/transactions',
              params: {categoryId: category.categoryId},
            });
          }}
        />
        <AccountsSummary
          accounts={dashboard.accounts || []}
          mainCurrency="ARS"
          onPressAccount={account => {
            router.push({
              pathname: '/(tabs)/transactions',
              params: {accountId: account.id},
            });
          }}
        />
      </View>
    </CustomView>
  );
};

export default DashboardScreen;
