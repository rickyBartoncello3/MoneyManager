import {ICON_NAMES} from '@/src/shared/constants/iconNames';

export interface HighlightItem {
  id: string;
  title: string;
  subtitle: string;
  value: number;
  icon: ICON_NAMES;
}

export interface HighlightsProps {
  highlightedItems: HighlightItem[];
}

export interface HighlightCardProps {
  item: HighlightItem;
}
