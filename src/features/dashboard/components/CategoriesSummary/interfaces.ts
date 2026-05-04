export interface CategoryItem {
  id: string;
  name: string;
  amount: number;
  percentage: number;
  color: string;
  iconName?: string;
}

export interface CategoriesSummaryProps {
  categories: CategoryItem[];
  maxVisible?: number;
  title?: string;
  currencySymbol?: string;
  onPressShowMore?: () => void;
  onPressCategory?: (category: CategoryItem) => void;
}
