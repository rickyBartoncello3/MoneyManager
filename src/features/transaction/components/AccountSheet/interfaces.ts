import {RefObject} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {Account} from '@/src/domain/accounts/Account';

export type AccountSheetProps = {
  bottomSheetRef: RefObject<BottomSheetModal | null>;
  accounts: Account[];
  selectedAccountId?: string;
  onSelectAccount: (account: Account) => void;
};
