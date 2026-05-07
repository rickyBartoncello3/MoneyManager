import {runMigrations} from '@/src/core/database/migrations';
import {seedDefaultAccounts} from '@/src/core/database/seed/seedDefaultAccounts';
import {seedDefaultCategories} from '@/src/core/database/seed/seedDefaultCategories';
import {seedDefaultCurrencies} from '@/src/core/database/seed/seedDefaultCurrencies';
import {seedMonefyAprilMayTransactions} from '@/src/core/database/seed/seedMonefyAprilMayTransactions';
//import {devResetAllTables} from '@/src/core/database/migrations/dev_reset_all';

export const bootstrapApp = async () => {
  console.log('[BOOTSTRAP] starting');

  await runMigrations();
  console.log('[BOOTSTRAP] migrations done');

  await seedDefaultAccounts();
  console.log('[BOOTSTRAP] accounts seeded');

  await seedDefaultCategories();
  console.log('[BOOTSTRAP] categories seeded');

  await seedDefaultCurrencies();
  console.log('[BOOTSTRAP] currencies seeded');

  await seedMonefyAprilMayTransactions();
  console.log('[BOOTSTRAP] seedMonefyAprilMayTransactions');

  //await devResetAllTables();

  console.log('[BOOTSTRAP] finished');
};
