import {useQuery} from '@tanstack/react-query';
import {exchangeRateRepository} from '@/src/data/repositories/exchangeRateRepository';

export function useUsdToArsQuery() {
  return useQuery({
    queryKey: ['exchange-rate', 'USD_ARS'],
    queryFn: exchangeRateRepository.refreshUsdToArs,
    staleTime: 1,
    retry: 1,
  });
}
