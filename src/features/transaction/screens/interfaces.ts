import {TransactionType} from '@/src/domain/transactions/TransactionType';
import {IconName} from '@/src/shared/constants/iconNames';

export type TransactionMode = TransactionType;

export type CategoryOption = {
  id: string;
  name: string;
  icon: IconName;
  color: string;
  backgroundColor: string;
};

export type SmartAmountButton = {
  label: string;
  value: string;
};
