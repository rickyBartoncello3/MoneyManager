import {useQuery} from '@tanstack/react-query';
import {transactionRepository} from '@/src/data/repositories/transactionRepository';

export function useTransactionsQuery() {
  return useQuery({
    queryKey: ['transactions'],
    queryFn: transactionRepository.getTransactions,
    staleTime: 1000 * 30,
  });
}
