import {db} from '@/src/core/database/db';
import {ExchangeRateRow} from './exchangeRatesRow';

export const exchangeRateLocalDataSource = {
  async getUsdToArs(): Promise<ExchangeRateRow | null> {
    const row = await db.getFirst<ExchangeRateRow>(
      `
                SELECT *
                FROM exchange_rates
                WHERE id = ?
                    LIMIT 1;
            `,
      ['USD_ARS'],
    );

    return row ?? null;
  },

  async upsert(row: ExchangeRateRow) {
    await db.run(
      `
      INSERT OR REPLACE INTO exchange_rates (
        id,
        from_currency,
        to_currency,
        rate,
        fetched_at,
        created_at,
        updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?);
      `,
      [
        row.id,
        row.from_currency,
        row.to_currency,
        row.rate,
        row.fetched_at,
        row.created_at,
        row.updated_at,
      ],
    );
  },
};
