// src/data/repositories/dashboardRepository.ts

import {dashboardLocalDataSource} from '@/src/data/local/dashboard/dashboardLocalDataSource';
import {dashboardMapper} from '@/src/data/mappers/dashboardMapper';
import {DashboardSummary} from '@/src/domain/dashboard/DashboardSummary';
import {CurrencyCode} from '@/src/domain/money/Currency';

const getPreviousMonth = (month: string) => {
  const [year, monthNumber] = month.split('-').map(Number);
  const date = new Date(year, monthNumber - 2, 1);

  const previousYear = date.getFullYear();
  const previousMonth = String(date.getMonth() + 1).padStart(2, '0');

  return `${previousYear}-${previousMonth}`;
};

const getCurrentWeekRange = () => {
  const now = new Date();

  const day = now.getDay();
  const diffToMonday = day === 0 ? -6 : 1 - day;

  const monday = new Date(now);
  monday.setDate(now.getDate() + diffToMonday);
  monday.setHours(0, 0, 0, 0);

  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  sunday.setHours(23, 59, 59, 999);

  return {
    start: monday.toISOString(),
    end: sunday.toISOString(),
  };
};

const getPreviousWeekRange = () => {
  const current = getCurrentWeekRange();

  const start = new Date(current.start);
  start.setDate(start.getDate() - 7);

  const end = new Date(current.end);
  end.setDate(end.getDate() - 7);

  return {
    start: start.toISOString(),
    end: end.toISOString(),
  };
};

const calculatePercentageChange = (current: number, previous: number) => {
  if (previous === 0 && current === 0) return 0;
  if (previous === 0) return 100;

  return ((current - previous) / previous) * 100;
};

export const dashboardRepository = {
  async getSummary(params: {
    month: string;
    mainCurrency: CurrencyCode;
  }): Promise<DashboardSummary> {
    const {month, mainCurrency} = params;

    const previousMonth = getPreviousMonth(month);

    const accountsRows = await dashboardLocalDataSource.getAccountsSummary();

    const accounts = accountsRows.map(dashboardMapper.accountSummaryRowToDomain);

    //TODO REPLACE WITH CURRENT ACCOUNT
    const currentBalance = accounts.find(a => a.id === 'acc_cash_ars')?.balance || 0;

    const spentThisMonth = await dashboardLocalDataSource.getSpentByMonth(month);

    const spentPreviousMonth =
      await dashboardLocalDataSource.getSpentByMonth(previousMonth);

    const categoryRows =
      await dashboardLocalDataSource.getCategoryBreakdownByMonth(month);

    const categories = categoryRows.map(row =>
      dashboardMapper.categoryExpenseSummaryRowToDomain(row, spentThisMonth),
    );

    console.log('Categories with percentage:', categories);

    const currentWeekRange = getCurrentWeekRange();
    const previousWeekRange = getPreviousWeekRange();

    const currentWeekSpent = await dashboardLocalDataSource.getSpentBetween(
      currentWeekRange.start,
      currentWeekRange.end,
    );

    const previousWeekSpent = await dashboardLocalDataSource.getSpentBetween(
      previousWeekRange.start,
      previousWeekRange.end,
    );

    const weeklyChange = calculatePercentageChange(currentWeekSpent, previousWeekSpent);

    const monthlyChange = calculatePercentageChange(spentThisMonth, spentPreviousMonth);

    const budget = currentBalance;
    const available = budget - spentThisMonth;
    const budgetProgress = budget === 0 ? 0 : (spentThisMonth / budget) * 100;

    return {
      month,
      mainCurrency,

      currentBalance,
      spentThisMonth,
      budget,
      available,
      budgetProgress,

      weeklySpendingInsight: {
        value: currentWeekSpent,
        percentageChange: weeklyChange,
      },

      monthlySpendingInsight: {
        value: spentThisMonth,
        percentageChange: monthlyChange,
      },

      categories,
      accounts,
    };
  },
};
