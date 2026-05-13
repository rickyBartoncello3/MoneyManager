import {getWeekRange} from '@/src/shared/utils/getWeekRange';

export type DateRangeMode = 'year' | 'month' | 'week';

export const getDateRange = (dateString: string, mode: DateRangeMode): DateRange => {
  const date = new Date(dateString);
  console.log({date, dateString});

  if (Number.isNaN(date.getTime())) {
    throw new Error(`Invalid date string: ${dateString}`);
  }

  if (mode === 'year') {
    const year = date.getFullYear();

    const start = new Date(year, 0, 1, 0, 0, 0, 0);
    const end = new Date(year, 11, 31, 23, 59, 59, 999);

    return {
      start: start.toISOString(),
      end: end.toISOString(),
    };
  }

  if (mode === 'month') {
    const year = date.getFullYear();
    const month = date.getMonth();

    const start = new Date(year, month + 1, 1, 0, 0, 0, 0);
    const end = new Date(year, month + 2, -1, 23, 59, 59, 999);

    console.log({
      a_start: start.toISOString(),
      b_end: end.toISOString(),
    });

    return {
      start: start.toISOString(),
      end: end.toISOString(),
    };
  }

  const {start, end} = getWeekRange(dateString);
  return {
    start,
    end,
  };
};

type DateRange = {
  start: string;
  end: string;
};
