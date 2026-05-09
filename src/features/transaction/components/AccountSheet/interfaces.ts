import {RefObject} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {AccountSummary} from '@/src/domain/dashboard/AccountSummary';

export type AccountSheetProps = {
  bottomSheetRef: RefObject<BottomSheetModal | null>;
  accounts: AccountSummary[];
  selectedAccountId?: string;
  onSelectAccount: (account: AccountSummary) => void;
};
