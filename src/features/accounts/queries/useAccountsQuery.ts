import {useQuery} from '@tanstack/react-query';
import {accountRepository} from '@/src/data/repositories/accountRepository';

export function useAccountsQuery() {
  return useQuery({
    queryKey: ['accounts'],
    queryFn: accountRepository.getAccounts,
    staleTime: Infinity,
  });
}
