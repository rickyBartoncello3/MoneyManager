import {useQuery} from '@tanstack/react-query';
import {transactionRepository} from '@/src/data/repositories/transactionRepository';

export function useCategoryBreakdownQuery() {
  return useQuery({
    queryKey: ['category-breakdown'],
    queryFn: transactionRepository.getSummaryByCategory,
    staleTime: 1000 * 30,
  });
}
