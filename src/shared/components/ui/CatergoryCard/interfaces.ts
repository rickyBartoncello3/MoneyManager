import {Account} from '@/src/domain/accounts/Account';
import {Category} from '@/src/domain/categories/Category';

export interface CategoryCardProps {
  category: Category;
  onCategoryPress: (category: Category) => void;
}
