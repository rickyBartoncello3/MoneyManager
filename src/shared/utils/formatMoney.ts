export const formatMoney = (value: number, symbol = '$') => {
  const absValue = Math.abs(value);

  return `${value < 0 ? '-' : ''}${symbol} ${absValue.toLocaleString('es-AR')}`;
};
