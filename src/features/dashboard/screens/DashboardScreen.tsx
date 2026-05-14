import {ActivityIndicator, View} from 'react-native';
import styles from './Dashboard.styles';
import {CustomView} from '@/src/shared/components/ui/CustomView';
import {HeroCard} from '@/src/features/dashboard/components/HeroCard/HeroCard';
import {Highlights} from '@/src/shared/components/ui/Highlight/Highlight';
import {CategoriesSummary} from '@/src/features/dashboard/components/CategoriesSummary/CategoriesSummary';
import {AccountsSummary} from '@/src/features/dashboard/components/AccountsSummary/AccountsSummary';
import {router} from 'expo-router';
import {useDashboardViewModel} from '@/src/features/dashboard/hooks/useDashboardViewModel';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {runOnJS} from 'react-native-reanimated';
import {Header} from '@/src/shared/components/ui/Hearder/Header';

const DashboardScreen = () => {
  const vm = useDashboardViewModel();

  const swipeGesture = Gesture.Pan()
    .activeOffsetX([-40, 40])
    .failOffsetY([-20, 20])
    .onEnd(event => {
      const minSwipeDistance = 80;

      if (event.translationX > minSwipeDistance) {
        runOnJS(vm.goToPreviousMonth)();
      }

      if (event.translationX < -minSwipeDistance) {
        runOnJS(vm.goToNextMonth)();
      }
    });

  const dashboard = vm.data;

  return (
    <CustomView margin>
      {vm.isLoading && <ActivityIndicator size="large" />}
      <Header monthLabel={vm.monthLabel} />
      <GestureDetector gesture={swipeGesture}>
        <View style={styles.container}>
          <HeroCard
            currentBalance={dashboard.currentBalance!}
            spent={dashboard.spentThisMonth || 0}
            monthlyBudget={dashboard.income || 0}
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
      </GestureDetector>
    </CustomView>
  );
};

export default DashboardScreen;
