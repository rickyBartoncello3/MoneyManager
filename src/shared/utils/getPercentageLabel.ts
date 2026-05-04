export const getPercentageLabel = (value: number) => {
  const sign = value > 0 ? '+' : '';
  return `${sign}${value}%`;
};
