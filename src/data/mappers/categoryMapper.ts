import {Category} from '@/src/domain/categories/Category';
import {CategoryRow} from '@/src/data/local/categories/categoryRow';

export const categoryMapper = {
  localRowToDomain(row: CategoryRow): Category {
    return {
      id: row.id,
      name: row.name,
      type: row.type,
      icon: row.icon,
      color: row.color,
      archivedAt: row.archived_at,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
      deletedAt: row.deleted_at,
    };
  },
};
