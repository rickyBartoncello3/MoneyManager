export type HighlightTrend = 'up' | 'down' | 'neutral';

export interface HighlightItem {
  id: string;
  title: string;
  subtitle: string;
  percentage: number;
  trend: HighlightTrend;
  chartType: 'bar' | 'line';
  values: number[];
}

export interface HighlightsProps {
  weeklyPercentage: number;
  monthlyPercentage: number;
  weeklyValues: number[];
  monthlyValues: number[];
}

export interface HighlightCardProps {
  item: HighlightItem;
}
