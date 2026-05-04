import {runMigrations} from '@/src/core/database/migrations';
import {seedDefaultAccounts} from '@/src/core/database/seed/seedDefaultAccounts';
import {seedDefaultCategories} from '@/src/core/database/seed/seedDefaultCategories';
import {seedDefaultCurrencies} from '@/src/core/database/seed/seedDefaultCurrencies';

export async function bootstrapApp() {
  await runMigrations();

  await seedDefaultCurrencies();
  await seedDefaultAccounts();
  await seedDefaultCategories();
}
