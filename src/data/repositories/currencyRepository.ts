import {currencyLocalDataSource} from '@/src/data/local/currencies/currencyLocalDataSource';
import {currencyMapper} from '@/src/data/mappers/currencyMapper';

export const currencyRepository = {
  async getCurrency() {
    const rows = await currencyLocalDataSource.findAll();
    return rows.map(currencyMapper.localRowToDomain);
  },
};
