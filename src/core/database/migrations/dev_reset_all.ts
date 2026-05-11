import {db} from '@/src/core/database/db';

export const devResetAllTables = async () => {
  await db.exec(`
    DROP TABLE IF EXISTS accounts;
  `);

  console.info('[DB] accounts table reset successfully');

  await db.exec(`
    DROP TABLE IF EXISTS categories;
  `);

  console.info('[DB] categories table reset successfully');

  await db.exec(`
    DROP TABLE IF EXISTS currencies;
  `);

  console.info('[DB] currencies table reset successfully');

  await db.exec(`
    DROP TABLE IF EXISTS exchange_rates;
  `);

  console.info('[DB] exchange_rates table reset successfully');

  await db.exec(`
    DROP TABLE IF EXISTS transactions;
  `);

  console.info('[DB] transactions table reset successfully');
};
