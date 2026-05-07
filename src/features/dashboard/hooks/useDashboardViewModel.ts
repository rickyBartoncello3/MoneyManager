// src/features/dashboard/hooks/useDashboardViewModel.ts

import {useMemo} from 'react';
import {useDashboardQuery} from '../queries/useDashboardQuery';
//import {useSettingsStore} from '@/src/store/settingsStore';

const getCurrentMonth = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');

  return `${year}-${month}`;
};

export const useDashboardViewModel = () => {
  const mainCurrency = 'ARS';

  const selectedMonth = useMemo(() => getCurrentMonth(), []);

  const dashboardQuery = useDashboardQuery({
    month: selectedMonth,
    mainCurrency,
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
