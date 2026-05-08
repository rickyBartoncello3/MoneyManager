import {useQuery} from '@tanstack/react-query';
import {dashboardRepository} from '@/src/data/repositories/dashboardRepository';

export const useDashboardQuery = (params: {month: string; accountIdCurrency: string}) => {
  return useQuery({
    queryKey: ['dashboard', params.month, params.accountIdCurrency],
    queryFn: () => dashboardRepository.getSummary(params),
    staleTime: 1000 * 30,
  });
};
