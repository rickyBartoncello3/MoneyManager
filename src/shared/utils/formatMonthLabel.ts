export const formatMonthLabel = (month: string) => {
  const [year, monthNumber] = month.split('-').map(Number);

  const date = new Date(year, monthNumber - 1, 1);

  return date.toLocaleDateString('en-ARG', {
    month: 'long',
    year: 'numeric',
  });
};
