import {AccountSummary} from '@/src/domain/dashboard/AccountSummary';
import {CurrencyCode} from '@/src/features/dashboard/components/AccountsSummary/interfaces';

export interface AccountsItem extends AccountSummary {
  equivalentInMainCurrency?: number;
  mainCurrency: CurrencyCode;
}

export interface AccountRowProps {
  account: AccountsItem;
  onPress?: (account: AccountsItem) => void;
}
