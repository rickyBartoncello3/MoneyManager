import {Account} from '@/src/domain/accounts/Account';

export interface AccountSelectorProps {
  accounts: Account[];
  selectedAccountId: string | null;
  onSelectAccount: (accountId: string) => void;
}
