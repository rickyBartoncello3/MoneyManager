import {IconName} from '@/src/shared/constants/iconNames';

export interface TransactionButtonProps {
  handlePressIncome: () => void;
  icon: IconName;
  text: string;
}
