import {Transaction} from '@/src/domain/transactions/Transaction';
import {Category} from '@/src/domain/categories/Category';
import {GroupMode} from '@/src/features/transactions/screens/interfaces';

export interface TransactionMovementRowProps {
  transaction: Transaction;
  categories: Category[];
  symbol: string;
  groupMode: GroupMode;
}
