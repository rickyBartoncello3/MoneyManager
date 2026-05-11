import {View} from 'react-native';
import Text from '@/src/shared/components/ui/Text/Text';
import styles from './ToolBar.styles';
import {AccountSheet} from '@/src/features/transaction/components/AccountSheet/AccountSheet';
import React, {useContext, useMemo, useRef, useState} from 'react';
import {AccountSummary} from '@/src/domain/dashboard/AccountSummary';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {getCurrentMonth} from '@/src/shared/utils/getCurrentMonth';
import {useDashboardQuery} from '@/src/features/dashboard/queries/useDashboardQuery';
import {useSettingsStore} from '@/src/store/settings/slice';
import {ToolbarProps} from '@/src/features/transactions/components/ToolBar/interfaces';
import {ICON_NAMES} from '@/src/shared/constants/iconNames';
import {Box} from '@/src/features/transaction/components/Box/Box';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import {SegmentedButtons} from '@/src/shared/components/ui/SegmentedButtons/SegmentedButtons';
import {GroupMode} from '@/src/features/transactions/screens/interfaces';
import {TouchableRipple} from 'react-native-paper';
import {CustomIcon} from '@/src/shared/components/ui/TabBarIcon/CustomIcon';
import {Card} from '@/src/shared/components/ui/Card/Card';

const allAccounts: AccountSummary = {
  id: 'acc_all',
  currency: 'ARS',
  icon: ICON_NAMES.NOTE,
  type: 'cash',
  name: 'All accounts',
  symbol: '',
  balance: 0,
};

export const ToolBar = ({
  accounts,
  selectedAccountId,
  groupMode,
  areAllExpanded,
  onChangeGroupMode,
  onToggleExpandAll,
}: ToolbarProps) => {
  const {colors, currentTheme} = useContext(ThemeContext);
  const accountIdCurrency = useSettingsStore(state => state.accountIdCurrency);
  const selectedMonth = useMemo(() => getCurrentMonth(), []);
  const {data: summary} = useDashboardQuery({
    month: selectedMonth,
    accountIdCurrency,
  });
  const accountCurrency = summary?.accounts.find(a => a.id === accountIdCurrency);
  const [account, setAccount] = useState<AccountSummary>(accountCurrency!);
  const accountSheetRef = useRef<BottomSheetModal>(null);

  const handleSelectAccount = (account: AccountSummary) => {
    setAccount(account);
    accountSheetRef.current?.dismiss();
  };

  const openAccountSheet = () => {
    accountSheetRef.current?.present();
  };
  return (
    <Card>
      <View style={{gap: currentTheme.spacing.md}}>
        <View style={styles.groupModeRow}>
          <Box
            title={'Account'}
            subTitle={account.name}
            onPress={openAccountSheet}
            icon={{
              name: account.icon,
              color: colors.text,
            }}
          />
          <TouchableRipple
            borderless
            onPress={onToggleExpandAll}
            style={[styles.expandButton, {backgroundColor: colors.primary}]}
          >
            <CustomIcon
              name={areAllExpanded ? ICON_NAMES.UNFOLD_LESS : ICON_NAMES.UNFOLD_MORE}
              color={colors.text}
              size={30}
            />
          </TouchableRipple>
        </View>
        <Card>
          <Text size={13} weight={700} style={styles.toolbarLabel}>
            Group by
          </Text>
          <SegmentedButtons
            initialValue={groupMode}
            handleOnChange={value => {
              onChangeGroupMode(value as GroupMode);
            }}
            values={[
              {value: 'day', label: 'Day'},
              {value: 'category', label: 'Currency'},
            ]}
          />
        </Card>
      </View>
      <AccountSheet
        bottomSheetRef={accountSheetRef}
        accounts={[allAccounts, ...accounts]}
        selectedAccountId={account?.id}
        onSelectAccount={handleSelectAccount}
      />
    </Card>
  );
};
