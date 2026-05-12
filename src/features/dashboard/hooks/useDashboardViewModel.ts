import {useMemo} from 'react';
import {useDashboardQuery} from '../queries/useDashboardQuery';
import {useSettingsStore} from '@/src/store/settings/slice';
import {getCurrentMonth} from '@/src/shared/utils/getCurrentMonth';
import {useTranslation} from 'react-i18next';
import {ICON_NAMES} from '@/src/shared/constants/iconNames';

export const useDashboardViewModel = () => {
  const accountIdCurrency = useSettingsStore(state => state.accountIdCurrent);
  const {t} = useTranslation();

  const selectedMonth = useMemo(() => getCurrentMonth(), []);

  const dashboardQuery = useDashboardQuery({
    month: selectedMonth,
    accountIdCurrency,
  });

  const spendingInsight = [
    {
      id: 'weekly-spending',
      title: t('dashboard.spentThisWeek'),
      subtitle: t('dashboard.vsSpentPreviousWeek'),
      value: dashboardQuery.data?.weeklySpendingInsight?.percentageChange || 0,
      icon: ICON_NAMES.BAR_CHART,
    },
    {
      id: 'monthly-spending',
      title: t('dashboard.spentThisMonth'),
      subtitle: t('dashboard.vsSpentPreviousMonth'),
      value: dashboardQuery.data?.monthlySpendingInsight.percentageChange || 0,
      icon: ICON_NAMES.LINE_CHART,
    },
  ];

  return {
    t,
    month: selectedMonth,
    isLoading: dashboardQuery.isLoading,
    error: dashboardQuery.error,
    data: {...dashboardQuery.data, spendingInsight},
    refetch: dashboardQuery.refetch,
  };
};
