import {httpClient} from '@/src/core/api/httpClient';
import {ExchangeRateDto} from './exchangeRateDto';

export const exchangeRateRemoteDataSource = {
  getUsdToArs() {
    return httpClient.get<ExchangeRateDto>('v1/dolares/oficial');
  },
};
