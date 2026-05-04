import {CategoryType} from '@/src/domain/categories/CategoryType';

export type CategoryRow = {
  id: string;
  name: string;
  type: CategoryType;
  icon: string;
  color: string;
  archived_at: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
};
