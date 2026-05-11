import {normalizeAmount} from '@/src/shared/utils/normalizeAmount';
import {TransactionMode} from '@/src/features/transaction/screens/interfaces';
import {CurrencyCode} from '@/src/domain/currencies/Currency';

type BuildTransactionPayloadParams = {
  amount: string;
  currencyCode: CurrencyCode;
  accountId: string;
  categoryId?: string;
  occurredAt: string;
  note?: string;
  type: TransactionMode;
};

export const buildTransactionPayload = ({
  amount,
  currencyCode,
  accountId,
  categoryId,
  occurredAt,
  note,
  type,
}: BuildTransactionPayloadParams) => ({
  amount: normalizeAmount(amount),
  currency: currencyCode,
  accountId,
  categoryId,
  occurredAt,
  note,
  type,
  mainCurrency: currencyCode,
  exchangeRateToMainCurrency: 0,
});
