import {currencyLocalDataSource} from '@/src/data/local/currencies/currencyLocalDataSource';

export async function seedDefaultCurrencies() {
  const count = await currencyLocalDataSource.count();

  if (count > 0) return;

  const now = new Date().toISOString();

  await currencyLocalDataSource.insertMany([
    {
      code: 'ARS',
      name: 'Argentine Peso',
      symbol: '$',
      minor_units: 2,
      is_base: 1,
      created_at: now,
      updated_at: now,
    },
    {
      code: 'USD',
      name: 'US Dollar',
      symbol: 'US$',
      minor_units: 2,
      is_base: 0,
      created_at: now,
      updated_at: now,
    },
    {
      code: 'EUR',
      name: 'Euro',
      symbol: '€',
      minor_units: 2,
      is_base: 0,
      created_at: now,
      updated_at: now,
    },
  ]);
}
