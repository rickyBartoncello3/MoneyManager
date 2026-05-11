import {Category} from '@/src/domain/categories/Category';
import {CategoryOption} from '@/src/features/transaction/screens/interfaces';

export const toCategoryOption = (category: Category): CategoryOption => ({
  id: category.id,
  name: category.name,
  color: category.color,
  icon: category.icon,
  backgroundColor: category.backgroundColor,
});
