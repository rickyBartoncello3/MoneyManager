import {ComponentType} from 'react';
import {
  Add01Icon,
  AddCircleIcon,
  Car01Icon,
  Cash02Icon,
  Chart02Icon,
  CreditCardIcon,
  HomeIcon,
  LeftToRightListBulletIcon,
  MoreHorizontalCircle01Icon,
  Remove01Icon,
  RemoveCircleIcon,
} from '@/src/shared/assets/icons';
import {IconName} from '@/src/shared/constants/iconNames';

export const iconMapper = {
  home: HomeIcon,
  transactions: LeftToRightListBulletIcon,
  addTransaction: AddCircleIcon,
  reports: Chart02Icon,
  more: MoreHorizontalCircle01Icon,
  cash: Cash02Icon,
  creditCard: CreditCardIcon,
  addCircle: AddCircleIcon,
  removeCircle: RemoveCircleIcon,
  add: Add01Icon,
  remove: Remove01Icon,
  car: Car01Icon,
} as Record<IconName, ComponentType<any>>;
