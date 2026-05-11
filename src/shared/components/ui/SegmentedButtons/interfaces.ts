import {TransactionMode} from '@/src/features/transaction/screens/interfaces';

type Value = {
  value: TransactionMode;
  label: string;
};

export interface SegmentedButtonsProps {
  initialValue: TransactionMode;
  handleOnChange: (newValue: TransactionMode) => void;
  values: Value[];
}
