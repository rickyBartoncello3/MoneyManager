export const addMonths = (month: string, amount: number) => {
  const [year, monthNumber] = month.split('-').map(Number);

  const date = new Date(year, monthNumber - 1 + amount, 1);

  const nextYear = date.getFullYear();
  const nextMonth = String(date.getMonth() + 1).padStart(2, '0');

  return `${nextYear}-${nextMonth}`;
};
