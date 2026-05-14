import {useState} from 'react';
import {useDashboardQuery} from '../queries/useDashboardQuery';
import {useSettingsStore} from '@/src/store/settings/slice';
import {formatMonth} from '@/src/shared/utils/formatMonth';
import {useTranslation} from 'react-i18next';
import {ICON_NAMES} from '@/src/shared/constants/iconNames';
import {addMonths} from '@/src/shared/utils/addMonths';
import {formatMonthLabel} from '@/src/shared/utils/formatMonthLabel';

export const useDashboardViewModel = () => {
  const accountIdCurrency = useSettingsStore(state => state.accountIdCurrent);
  const setFocusDate = useSettingsStore(state => state.setFocusDate);
  const focusDate = useSettingsStore(state => state.focusDate);
  const {t} = useTranslation();

  const [selectedMonth, setSelectedMonth] = useState(formatMonth(focusDate));

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

  const goToPreviousMonth = () => {
    const newDateFocused = addMonths(selectedMonth, -1);
    setFocusDate(newDateFocused);
    setSelectedMonth(newDateFocused);
  };

  const goToNextMonth = () => {
    const newDateFocused = addMonths(selectedMonth, 1);
    const nextDate = new Date(newDateFocused);
    const currentDate = new Date();
    if (nextDate < currentDate) {
      setFocusDate(newDateFocused);
      setSelectedMonth(newDateFocused);
    }
  };

  const goToCurrentMonth = () => {
    setSelectedMonth(formatMonth());
  };

  return {
    t,
    monthLabel: formatMonthLabel(selectedMonth),
    month: selectedMonth,
    isLoading: dashboardQuery.isLoading,
    error: dashboardQuery.error,
    data: {...dashboardQuery.data, spendingInsight},
    refetch: dashboardQuery.refetch,
    goToCurrentMonth,
    goToPreviousMonth,
    goToNextMonth,
  };
};
