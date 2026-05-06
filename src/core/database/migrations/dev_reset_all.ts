import {db} from '@/src/core/database/db';

export const devResetAllTables = async () => {
  await db.exec(`
    DROP TABLE IF EXISTS accounts;
  `);

  console.log('[DB] accounts table reset successfully');

  await db.exec(`
    DROP TABLE IF EXISTS categories;
  `);

  console.log('[DB] categories table reset successfully');

  await db.exec(`
    DROP TABLE IF EXISTS currencies;
  `);

  console.log('[DB] currencies table reset successfully');

  await db.exec(`
    DROP TABLE IF EXISTS exchange_rates;
  `);

  console.log('[DB] exchange_rates table reset successfully');

  await db.exec(`
    DROP TABLE IF EXISTS transactions;
  `);

  console.log('[DB] transactions table reset successfully');
};
