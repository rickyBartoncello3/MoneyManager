import {CategorySummary} from '@/src/domain/dashboard/CategorySummary';

export interface CategoryItem {
  id: string;
  name: string;
  total: number;
  percentage: number;
  color: string;
  iconName?: string;
}

export interface CategoriesSummaryProps {
  categories: CategorySummary[];
  maxVisible?: number;
  title?: string;
  currencySymbol?: string;
  onPressShowMore?: () => void;
  onPressCategory?: (category: CategorySummary) => void;
}
