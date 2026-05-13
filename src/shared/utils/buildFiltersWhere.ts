import * as SQLite from 'expo-sqlite';
import {getMonthRange} from '@/src/shared/utils/getMonthRange';
import {TransactionFilters} from '@/src/domain/transactions/TransactionFilters';
import {getDateRange} from '@/src/shared/utils/getDateRange';

export const buildFiltersWhere = (filters?: TransactionFilters) => {
  const where: string[] = ['deleted_at IS NULL'];
  const params: unknown[] = [];

  console.log('filters', filters?.date);

  if (filters?.date) {
    const {start, end} = getDateRange(filters.date, 'month');

    where.push('occurred_at >= ?');
    params.push(start);

    where.push('occurred_at <= ?');
    params.push(end);
  }

  if (filters?.type) {
    where.push('type = ?');
    params.push(filters.type);
  }

  if (filters?.accountId && filters.accountId !== 'acc_all') {
    where.push('account_id = ?');
    params.push(filters.accountId);
  }

  if (filters?.categoryId) {
    where.push('category_id = ?');
    params.push(filters.categoryId);
  }

  if (filters?.currency) {
    where.push('currency = ?');
    params.push(filters.currency);
  }

  console.log({params});

  return {
    whereSql: where.join(' AND '),
    params: params as SQLite.SQLiteBindParams,
  };
};
