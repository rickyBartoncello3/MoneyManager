import {CategoryType} from './CategoryType';

export type Category = {
  id: string;
  name: string;
  type: CategoryType;
  icon: string;
  color: string;
  archivedAt: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};
