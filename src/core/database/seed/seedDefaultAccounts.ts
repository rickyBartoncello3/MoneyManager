import {accountLocalDataSource} from '@/src/data/local/accounts/accountLocalDataSource';
import {now} from '@/src/core/date/now';

export async function seedDefaultAccounts() {
  const count = await accountLocalDataSource.count();

  if (count > 0) return;

  await accountLocalDataSource.insertMany([
    {
      id: 'acc_cash_ars',
      name: 'Cash pesos',
      type: 'cash',
      icon: 'wallet',
      currency_code: 'ARS',
      initial_balance_minor: 0,
      include_in_total: 1,
      archived_at: null,
      created_at: now(),
      updated_at: now(),
      deleted_at: null,
    },
    {
      id: 'acc_cash_usd',
      name: 'Cash dollars',
      type: 'cash',
      icon: 'dollarCircle',
      currency_code: 'USD',
      initial_balance_minor: 0,
      include_in_total: 1,
      archived_at: null,
      created_at: now(),
      updated_at: now(),
      deleted_at: null,
    },
    {
      id: 'acc_bbva_visa',
      name: 'BBVA Visa',
      type: 'creditCard',
      icon: 'creditCard',
      currency_code: 'ARS',
      initial_balance_minor: 0,
      include_in_total: 1,
      archived_at: null,
      created_at: now(),
      updated_at: now(),
      deleted_at: null,
    },
    {
      id: 'acc_bbva_mastercard',
      name: 'BBVA Mastercard',
      type: 'creditCard',
      icon: 'creditCard',
      currency_code: 'ARS',
      initial_balance_minor: 0,
      include_in_total: 1,
      archived_at: null,
      created_at: now(),
      updated_at: now(),
      deleted_at: null,
    },
  ]);
}
