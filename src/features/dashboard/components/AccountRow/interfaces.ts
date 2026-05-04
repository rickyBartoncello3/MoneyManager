import {AccountItem} from '../AccountsSummary/interfaces.ts';

export interface AccountRowProps {
  account: AccountItem;
  onPress?: (account: AccountItem) => void;
}
