import {useMutation, useQueryClient} from '@tanstack/react-query';
import {transactionRepository} from '@/src/data/repositories/transactionRepository';

export function useCreateTransactionMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: transactionRepository.create,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['transactions']});
      queryClient.invalidateQueries({queryKey: ['accounts']});
      queryClient.invalidateQueries({queryKey: ['dashboard']});
    },
  });
}
