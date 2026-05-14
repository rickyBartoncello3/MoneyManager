import {AccountSummary} from './AccountSummary';
import {CategorySummary} from './CategorySummary';
import {InsightSummary} from './InsightSummary';

export type DashboardSummary = {
  month: string;
  currentAccount: AccountSummary;

  currentBalance: number;
  previousBalance: number;
  spentThisMonth: number;
  income: number;
  budgetProgress: number;

  weeklySpendingInsight: InsightSummary;
  monthlySpendingInsight: InsightSummary;

  categories: CategorySummary[];
  accounts: AccountSummary[];
};
