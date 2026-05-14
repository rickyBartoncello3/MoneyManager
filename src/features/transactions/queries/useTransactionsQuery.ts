import {useQuery} from '@tanstack/react-query';
import {transactionRepository} from '@/src/data/repositories/transactionRepository';
import {TransactionFilters} from '@/src/domain/transactions/TransactionFilters';

export const useTransactionsQuery = (filters?: TransactionFilters) => {
  return useQuery({
    queryKey: ['transactions', filters],
    queryFn: () => transactionRepository.getTransactionsByFilters(filters),
    staleTime: 1000 * 30,
  });
};
