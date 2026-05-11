import {getMonthRange} from '@/src/shared/utils/getMonthRange';
import {TransactionFilters} from '@/src/domain/transactions/TransactionFilters';

export const buildFiltersWhere = (filters?: TransactionFilters) => {
  const where: string[] = ['deleted_at IS NULL'];
  const params: unknown[] = [];

  if (filters?.month) {
    const {start, end} = getMonthRange(filters.month);

    where.push('occurred_at >= ?');
    params.push(start);

    where.push('occurred_at <= ?');
    params.push(end);
  }

  if (filters?.type) {
    where.push('type = ?');
    params.push(filters.type);
  }

  if (filters?.accountId) {
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

  return {
    whereSql: where.join(' AND '),
    params,
  };
};
