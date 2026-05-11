import {Category} from '@/src/domain/categories/Category';
import {Transaction} from '@/src/domain/transactions/Transaction';

export interface TransactionGroupCardProps {
  group: TransactionGroup;
  categories: Category[];
  isExpanded: boolean;
  onToggle: () => void;
  currencyCode: string;
}

export type TransactionGroup = {
  id: string;
  title: string;
  subtitle: string;
  total: number;
  count: number;
  transactions: Transaction[];
};
