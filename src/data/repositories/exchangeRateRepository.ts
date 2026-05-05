import {exchangeRateLocalDataSource} from '@/src/data/local/exchangeRates/exchangeRatesLocalDataSource';
import {exchangeRateRemoteDataSource} from '@/src/data/remote/exchangeRates/exchangeRatesRemoteDataSource';

export const exchangeRateRepository = {
  async getLocalUsdToArs() {
    return exchangeRateLocalDataSource.getUsdToArs();
  },

  async refreshUsdToArs() {
    try {
      const remoteRate = await exchangeRateRemoteDataSource.getUsdToArs();

      const now = new Date().toISOString();

      await exchangeRateLocalDataSource.upsert({
        id: 'USD_ARS',
        from_currency: 'ARS',
        to_currency: 'USD',
        buy: remoteRate.compra,
        sell: remoteRate.venta,
        fetched_at: remoteRate.fechaActualizacion,
        created_at: now,
        updated_at: now,
      });

      return exchangeRateLocalDataSource.getUsdToArs();
    } catch (error) {
      const localRate = await exchangeRateLocalDataSource.getUsdToArs();

      if (localRate) {
        return localRate;
      }

      throw error;
    }
  },
};
