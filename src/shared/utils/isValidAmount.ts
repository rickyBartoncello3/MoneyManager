import {MAX_DECIMAL_DIGITS, MAX_INTEGER_DIGITS} from '@/src/constants/settings';

export const isValidAmount = (amount: string) => {
  const [integerPart, decimalPart] = amount.split(',');

  return (
    integerPart.length <= MAX_INTEGER_DIGITS &&
    (!decimalPart || decimalPart.length <= MAX_DECIMAL_DIGITS)
  );
};
