import {runMigrations} from '@/src/core/database/migrations';
import {seedDefaultAccounts} from '@/src/core/database/seed/seedDefaultAccounts';
import {seedDefaultCategories} from '@/src/core/database/seed/seedDefaultCategories';
import {seedDefaultCurrencies} from '@/src/core/database/seed/seedDefaultCurrencies';
import {seedMonefyAprilMayTransactions} from '@/src/core/database/seed/seedMonefyAprilMayTransactions';

export const bootstrapApp = async () => {
  console.info('[BOOTSTRAP] starting');

  await runMigrations();
  console.info('[BOOTSTRAP] migrations done');

  await seedDefaultAccounts();
  console.info('[BOOTSTRAP] accounts seeded');

  await seedDefaultCategories();
  console.info('[BOOTSTRAP] categories seeded');

  await seedDefaultCurrencies();
  console.info('[BOOTSTRAP] currencies seeded');

  await seedMonefyAprilMayTransactions();
  console.info('[BOOTSTRAP] seedMonefyAprilMayTransactions');

  //await devResetAllTables();

  console.info('[BOOTSTRAP] finished');
};
