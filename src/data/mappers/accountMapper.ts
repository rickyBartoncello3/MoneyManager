import {Account} from '@/src/domain/accounts/Account';
import {ExchangeRatesDto} from '@/src/data/remote/exchangeRates/exchangeRateDto';

export const accountMapper = {
  localRowToDomain(row: ExchangeRatesDto): Account {
    return {
      id: row.id,
      name: row.name,
      type: row.type,
      icon: row.icon,
      currencyCode: row.currency_code,
      initialBalanceMinor: row.initial_balance_minor,
      includeInTotal: Boolean(row.include_in_total),
      archivedAt: row.archived_at,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
      deletedAt: row.deleted_at,
    };
  },
};
