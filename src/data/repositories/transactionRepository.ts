import {createTransaction} from '@/src/domain/transactions/createTransaction';
import {CreateTransactionInput} from '@/src/domain/transactions/CreateTransactionInput';
import {transactionLocalDataSource} from '@/src/data/local/transactions/transactionLocalDataSource';
import {transactionMapper} from '@/src/data/mappers/transactionMapper';
import {TransactionFilters} from '@/src/domain/transactions/TransactionFilters';

export const transactionRepository = {
  async getTransactions() {
    const rows = await transactionLocalDataSource.findAll();
    return rows.map(transactionMapper.localRowToDomain);
  },

  async getTransactionsByMonth(month: string) {
    const rows = await transactionLocalDataSource.findByMonth(month);
    return rows.map(transactionMapper.localRowToDomain);
  },

  async create(input: CreateTransactionInput) {
    const transaction = createTransaction(input);

    await transactionLocalDataSource.insert(
      transactionMapper.domainToLocalRow(transaction),
    );

    return transaction;
  },

  async getSummaryByCategory() {
    const rows = await transactionLocalDataSource.getTotalsByCategory();
    return rows.map(transactionMapper.localRowToCategorySummary);
  },

  async getTransactionsByFilters(filters?: TransactionFilters) {
    const rows = await transactionLocalDataSource.findByFilters(filters);

    return rows.map(transactionMapper.localRowToDomain);
  },
};
