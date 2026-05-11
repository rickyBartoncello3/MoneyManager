import {CategoryItem} from '@/src/features/dashboard/components/CategoriesSummary/interfaces';
import {CategorySummary} from '@/src/domain/dashboard/CategorySummary';

export interface CategoryRowProps {
  category: CategorySummary;
  currencySymbol?: string;
  onPress?: (category: CategorySummary) => void;
}
