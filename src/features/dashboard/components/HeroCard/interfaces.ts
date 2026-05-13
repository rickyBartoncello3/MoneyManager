import {ICON_NAMES} from '@/src/shared/constants/iconNames';

export interface HeroCardProps {
  currentBalance: number;
  spent: number;
  monthlyBudget: number;
  progress: number;
  currencySymbol?: string;
  title?: string;
  badgeLabel?: string;
}
