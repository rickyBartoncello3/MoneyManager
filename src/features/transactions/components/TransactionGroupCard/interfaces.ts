import {Transaction} from '@/src/domain/transactions/Transaction';
import {GroupMode} from '@/src/features/transactions/screens/interfaces';

export interface TransactionGroupCardProps {
  group: TransactionGroup;
  groupMode: GroupMode;
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
