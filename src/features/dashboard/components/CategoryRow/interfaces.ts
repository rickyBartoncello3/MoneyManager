import {CategoryItem} from '../CategoriesSummary/interfaces.ts';

export interface CategoryRowProps {
  category: CategoryItem;
  currencySymbol?: string;
  onPress?: (category: CategoryItem) => void;
}
