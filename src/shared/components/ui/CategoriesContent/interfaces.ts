import {Category} from '@/src/domain/categories/Category';

export interface CategoriesContentProps {
  title: string;
  categories: Category[];
  onCategoryPress: (category: Category) => void;
}
