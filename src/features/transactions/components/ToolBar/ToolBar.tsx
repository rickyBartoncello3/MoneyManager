import React, {useContext, useRef} from 'react';
import {View} from 'react-native';
import Text from '@/src/shared/components/ui/Text/Text';
import styles from './ToolBar.styles';
import {AccountSheet} from '@/src/features/transaction/components/AccountSheet/AccountSheet';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {ToolbarProps} from '@/src/features/transactions/components/ToolBar/interfaces';
import {ICON_NAMES} from '@/src/shared/constants/iconNames';
import {Box} from '@/src/features/transaction/components/Box/Box';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import {SegmentedButtons} from '@/src/shared/components/ui/SegmentedButtons/SegmentedButtons';
import {GroupMode} from '@/src/features/transactions/screens/interfaces';
import {TouchableRipple} from 'react-native-paper';
import {CustomIcon} from '@/src/shared/components/ui/TabBarIcon/CustomIcon';
import {Card} from '@/src/shared/components/ui/Card/Card';
import {Account} from '@/src/domain/accounts/Account';

export const ToolBar = ({
  accounts,
  groupMode,
  areAllExpanded,
  onChangeGroupMode,
  onToggleExpandAll,
  onSelectAccount,
  selectedAccountId,
}: ToolbarProps) => {
  const {colors, currentTheme} = useContext(ThemeContext);
  const accountCurrency = accounts.find(a => a.id === selectedAccountId);
  const accountSheetRef = useRef<BottomSheetModal>(null);

  const handleSelectAccount = (account: Account) => {
    onSelectAccount(account.id);
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
            subTitle={accountCurrency?.name}
            onPress={openAccountSheet}
            icon={{
              name: accountCurrency?.icon || ICON_NAMES.WALLET,
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
        accounts={accounts}
        selectedAccountId={accountCurrency?.id}
        onSelectAccount={handleSelectAccount}
      />
    </Card>
  );
};
