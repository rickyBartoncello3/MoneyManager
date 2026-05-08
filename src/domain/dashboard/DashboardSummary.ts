import {AccountSummary} from './AccountSummary';
import {CategorySummary} from './CategorySummary';
import {InsightSummary} from './InsightSummary';

export type DashboardSummary = {
  month: string;
  accountCurrency: AccountSummary;

  currentBalance: number;
  spentThisMonth: number;
  income: number;
  available: number;
  budgetProgress: number;

  weeklySpendingInsight: InsightSummary;
  monthlySpendingInsight: InsightSummary;

  categories: CategorySummary[];
  accounts: AccountSummary[];
};
