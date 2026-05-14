import currency from 'currency.js';

export const formatMoney = (value: number | string, symbol = '$', precision = 0) => {
  const number = currency(value, {
    symbol: symbol,
    precision: precision,
    separator: '.',
    decimal: ',',
  });

  return `${number.format()}`;
};
