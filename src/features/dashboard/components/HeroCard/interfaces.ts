export interface HeroCardProps {
  currentBalance: number;
  spent: number;
  monthlyBudget: number;
  progress: number;
  currencySymbol?: string;
  title?: string;
  badgeLabel?: string;
}

export interface MetricProps {
  amount: number;
  title: string;
  currencySymbol?: string;
}
