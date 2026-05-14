import {getWeekRange} from '@/src/shared/utils/getWeekRange';

export type DateRangeMode = 'year' | 'month' | 'week';

type DateRange = {
  start: string;
  end: string;
};

export const getDateRange = (dateString: string, mode: DateRangeMode): DateRange => {
  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    throw new Error(`Invalid date string: ${dateString}`);
  }

  if (mode === 'year') {
    const year = date.getUTCFullYear();

    const start = new Date(Date.UTC(year, 0, 1, 0, 0, 0, 0));
    const end = new Date(Date.UTC(year, 11, 31, 23, 59, 59, 999));

    return {
      start: start.toISOString(),
      end: end.toISOString(),
    };
  }

  if (mode === 'month') {
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();

    const start = new Date(Date.UTC(year, month, 1, 0, 0, 0, 0));
    const end = new Date(Date.UTC(year, month + 1, 0, 23, 59, 59, 999));

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
