import {createAccountsTable} from './001_create_accounts';
import {createCategoriesTable} from './002_create_categories';
import {createCurrenciesTable} from '@/src/core/database/migrations/003_create_currencies';
import {createExchangeRatesTable} from '@/src/core/database/migrations/004_create_exchange_rates';

export async function runMigrations() {
  await createAccountsTable();
  await createCategoriesTable();
  await createCurrenciesTable();
  await createExchangeRatesTable();
}
