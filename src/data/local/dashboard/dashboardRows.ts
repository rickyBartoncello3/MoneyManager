// src/data/local/dashboard/dashboardRows.ts

import {CurrencyCode} from '@/src/domain/money/Currency';
import {AccountType} from '@/src/domain/accounts/AccountType';

export type AccountSummaryRow = {
  id: string;
  name: string;
  type: AccountType;
  currency_code: CurrencyCode;
  initial_balance_minor: number;
  income_total: number | null;
  expense_total: number | null;
};

export type CategoryExpenseSummaryRow = {
  category_id: string;
  category_name: string;
  category_color: string;
  category_icon: string;
  total: number;
};

export type SpendingTotalRow = {
  total: number | null;
};
