import {CategoryType} from './CategoryType';
import {IconName} from '@/src/shared/constants/iconNames';

export type Category = {
  id: string;
  name: string;
  type: CategoryType;
  icon: IconName;
  color: string;
  backgroundColor: string;
  archivedAt: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};
