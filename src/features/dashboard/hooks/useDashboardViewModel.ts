import {useMemo} from 'react';
import {useDashboardQuery} from '../queries/useDashboardQuery';
import {useSettingsStore} from '@/src/store/settings/slice';
import {getCurrentMonth} from '@/src/shared/utils/getCurrentMonth';

export const useDashboardViewModel = () => {
  const accountIdCurrency = useSettingsStore(state => state.accountIdCurrent);

  const selectedMonth = useMemo(() => getCurrentMonth(), []);

  const dashboardQuery = useDashboardQuery({
    month: selectedMonth,
    accountIdCurrency,
  });

  const spendingInsight = [
    {
      id: 'weekly-spending',
      title: 'Gasto semanal',
      subtitle: 'vs. semana anterior',
      value: dashboardQuery.data?.weeklySpendingInsight?.percentageChange || 0,
      chartType: 'bar',
    },
    {
      id: 'monthly-spending',
      title: 'Gasto mensual',
      subtitle: 'vs. mes anterior',
      value: dashboardQuery.data?.monthlySpendingInsight.percentageChange || 0,
      chartType: 'line',
    },
  ];

  return {
    month: selectedMonth,
    isLoading: dashboardQuery.isLoading,
    error: dashboardQuery.error,
    data: {...dashboardQuery.data, spendingInsight},
    refetch: dashboardQuery.refetch,
  };
};
