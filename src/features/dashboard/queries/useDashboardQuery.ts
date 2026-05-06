import {useQuery} from '@tanstack/react-query';
import {dashboardRepository} from '@/src/data/repositories/dashboardRepository';
import {CurrencyCode} from '@/src/domain/money/Currency';

export const useDashboardQuery = (params: {
  month: string;
  mainCurrency: CurrencyCode;
}) => {
  return useQuery({
    queryKey: ['dashboard', params.month, params.mainCurrency],
    queryFn: () => dashboardRepository.getSummary(params),
    staleTime: 1000 * 30,
  });
};
