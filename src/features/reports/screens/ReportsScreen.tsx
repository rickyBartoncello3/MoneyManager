import React from 'react';
import {CustomView} from '@/src/shared/components/ui/CustomView';
import {getRandomInt} from '@/src/shared/utils/getRandomInt';
import {Highlights} from '@/src/shared/components/ui/Highlight/Highlight';
import {HighlightItem} from '@/src/shared/components/ui/Highlight/interfaces';
import {useUsdToArsQuery} from '@/src/features/exchangeRates/queries/useUsdToArsQuery';

export function ReportsScreen() {
  const {data: usdToArs} = useUsdToArsQuery();

  const items: HighlightItem[] = [
    {
      id: 'weekly-spending',
      title: 'Gasto semanal',
      subtitle: 'vs. semana anterior',
      value: getRandomInt(-10, 10),
      chartType: 'bar',
    },
    {
      id: 'monthly-spending',
      title: 'Gasto mensual',
      subtitle: 'vs. mes anterior',
      value: getRandomInt(-10, 10),
      chartType: 'line',
    },
  ];

  const items1: HighlightItem[] = [
    {
      id: 'weekly-spending',
      title: 'Dolar',
      subtitle: 'compra',
      value: usdToArs?.sell || 0,
      chartType: 'bar',
    },
    {
      id: 'monthly-spending',
      title: 'Dolar',
      subtitle: 'venta',
      value: usdToArs?.buy || 0,
      chartType: 'bar',
    },
  ];

  return (
    <CustomView margin>
      <Highlights highlightedItems={items} />
      <Highlights highlightedItems={items1} />
    </CustomView>
  );
}
