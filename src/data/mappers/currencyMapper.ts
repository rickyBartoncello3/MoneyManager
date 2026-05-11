import {CurrencyRow} from '@/src/data/local/currencies/currencyRow';
import {Currency} from '@/src/domain/currencies/Currency';

export const currencyMapper = {
  localRowToDomain(row: CurrencyRow): Currency {
    return {
      code: row.code,
      name: row.name,
      symbol: row.symbol,
      minorUnits: row.minor_units,
      isBase: row.is_base,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    };
  },
};
