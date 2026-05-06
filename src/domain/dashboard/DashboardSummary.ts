import {CurrencyCode} from '@/src/domain/money/Currency';
import {AccountSummary} from './AccountSummary';
import {CategoryExpenseSummary} from './CategoryExpenseSummary';
import {InsightSummary} from './InsightSummary';

export type DashboardSummary = {
  month: string;
  mainCurrency: CurrencyCode;

  currentBalance: number;
  spentThisMonth: number;
  budget: number;
  available: number;
  budgetProgress: number;

  weeklySpendingInsight: InsightSummary;
  monthlySpendingInsight: InsightSummary;

  categories: CategoryExpenseSummary[];
  accounts: AccountSummary[];
};
