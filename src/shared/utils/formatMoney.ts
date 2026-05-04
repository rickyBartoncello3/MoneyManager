export const formatMoney = (value: number, currency = '$') => {
  const absValue = Math.abs(value);

  if (currency === 'USD') {
    return `${value < 0 ? '-' : ''}US$ ${absValue.toLocaleString('es-AR')}`;
  }

  return `${value < 0 ? '-' : ''}$${absValue.toLocaleString('es-AR')}`;
};
