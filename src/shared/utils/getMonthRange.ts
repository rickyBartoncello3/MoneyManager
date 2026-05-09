export const getMonthRange = (month: string) => {
  const [year, monthNumber] = month.split('-').map(Number);

  const start = `${month}-01T00:00:00.000Z`;

  const lastDay = new Date(year, monthNumber, 0).getDate();
  const end = `${month}-${String(lastDay).padStart(2, '0')}T23:59:59.999Z`;

  return {start, end};
};
