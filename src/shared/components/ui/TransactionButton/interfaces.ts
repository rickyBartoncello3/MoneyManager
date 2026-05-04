import {IconName} from '../../../constants/iconNames.ts';

export interface TransactionButtonProps {
  handlePressIncome: () => void;
  icon: IconName;
  text: string;
}
