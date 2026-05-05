export type HighlightTrend = 'up' | 'down' | 'neutral';

export interface HighlightItem {
  id: string;
  title: string;
  subtitle: string;
  value: number;
  chartType: 'bar' | 'line';
}

export interface HighlightsProps {
  highlightedItems: HighlightItem[];
}

export interface HighlightCardProps {
  item: HighlightItem;
}
