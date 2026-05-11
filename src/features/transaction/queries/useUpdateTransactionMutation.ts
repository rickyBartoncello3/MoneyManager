// src/features/transactions/queries/useUpdateTransactionMutation.ts

import {useMutation, useQueryClient} from '@tanstack/react-query';
import {transactionRepository} from '@/src/data/repositories/transactionRepository';

export const useUpdateTransactionMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: transactionRepository.update,

    onSuccess: updatedTransaction => {
      queryClient.invalidateQueries({
        queryKey: ['transactions'],
      });

      queryClient.invalidateQueries({
        queryKey: ['transaction', updatedTransaction.id],
      });

      queryClient.invalidateQueries({
        queryKey: ['dashboard'],
      });

      queryClient.invalidateQueries({
        queryKey: ['expense-category-breakdown'],
      });
    },
  });
};
