import {runMigrations} from '@/src/core/database/migrations';
import {seedDefaultAccounts} from '@/src/core/database/seed/seedDefaultAccounts';
import {seedDefaultCategories} from '@/src/core/database/seed/seedDefaultCategories';
import {seedDefaultCurrencies} from '@/src/core/database/seed/seedDefaultCurrencies';

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

  //await devResetAllTables();

  console.log('[BOOTSTRAP] finished');
};
