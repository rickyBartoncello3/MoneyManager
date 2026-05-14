import {dashboardLocalDataSource} from '@/src/data/local/dashboard/dashboardLocalDataSource';
import {dashboardMapper} from '@/src/data/mappers/dashboardMapper';
import {DashboardSummary} from '@/src/domain/dashboard/DashboardSummary';
import {getWeekRange} from '@/src/shared/utils/getWeekRange';
import {now} from '@/src/core/date/now';
import {getPreviousMonth} from '@/src/shared/utils/getPreviousMonth';

const getPreviousWeekRange = (current: {start: string; end: string}) => {
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

const findAccountById = <T extends {id: string}>(
  accounts: T[],
  accountId: string,
): T | undefined => accounts.find(account => account.id === accountId);

const getAccountBalance = <T extends {id: string; balance: number}>(
  accounts: T[],
  accountId: string,
): number => findAccountById(accounts, accountId)?.balance ?? 0;

export const dashboardRepository = {
  async getSummary(params: {
    month: string;
    accountIdCurrency: string;
  }): Promise<DashboardSummary> {
    const {month, accountIdCurrency} = params;

    const previousMonth = getPreviousMonth(month);

    const [currentAccountsRows, previousAccountsRows] = await Promise.all([
      dashboardLocalDataSource.getAccountsSummary(month),
      dashboardLocalDataSource.getAccountsSummary(previousMonth),
    ]);

    const currentAccounts = currentAccountsRows.map(
      dashboardMapper.accountSummaryRowToDomain,
    );
    const previousAccounts = previousAccountsRows.map(
      dashboardMapper.accountSummaryRowToDomain,
    );

    const currentAccount = findAccountById(currentAccounts, accountIdCurrency)!;
    const previousAccount = findAccountById(previousAccounts, accountIdCurrency)!;

    const currentBalance = getAccountBalance(currentAccounts, currentAccount.id);
    const previousBalance = getAccountBalance(previousAccounts, currentAccount.id);

    const accounts = currentAccounts.map(account => {
      const previousBalance = getAccountBalance(previousAccounts, account.id);

      return {
        ...account,
        balance: previousBalance + account.balance,
      };
    });

    const spentThisMonth = currentAccount.expense;
    const spentPreviousMonth = previousAccount.expense;

    const categoryRows = await dashboardLocalDataSource.getCategoryBreakdownByMonth(
      month,
      currentAccount.id,
    );
    const categories = categoryRows.map(row =>
      dashboardMapper.categoryExpenseSummaryRowToDomain(row, spentThisMonth),
    );

    const expenseCategories = categories.filter(c => c.type === 'expense');
    const income = categories
      .filter(category => category.type === 'income')
      .reduce((total, category) => total + category.total, 0);

    const currentWeekRange = getWeekRange(now());
    const previousWeekRange = getPreviousWeekRange(currentWeekRange);

    const [currentWeekSpent, previousWeekSpent] = await Promise.all([
      dashboardLocalDataSource.getSpentBetween(
        currentWeekRange.start,
        currentWeekRange.end,
      ),
      dashboardLocalDataSource.getSpentBetween(
        previousWeekRange.start,
        previousWeekRange.end,
      ),
    ]);

    const weeklyChange = calculatePercentageChange(currentWeekSpent, previousWeekSpent);
    const monthlyChange = calculatePercentageChange(spentThisMonth, spentPreviousMonth);

    const budgetProgress =
      currentBalance === 0 ? 0 : Number(spentThisMonth / currentBalance);

    return {
      month: '',
      currentAccount: currentAccount,

      currentBalance,
      spentThisMonth,
      income,
      budgetProgress,
      previousBalance,

      weeklySpendingInsight: {
        value: currentWeekSpent,
        percentageChange: weeklyChange,
      },

      monthlySpendingInsight: {
        value: spentThisMonth,
        percentageChange: monthlyChange,
      },
      categories: expenseCategories,
      accounts,
    };
  },
};
