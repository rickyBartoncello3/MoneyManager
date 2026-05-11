import React, {use, useContext} from 'react';
import {Pressable, View} from 'react-native';
import styles from './AccountSelector.styles';
import {AccountSelectorProps} from './interfaces';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import Text from '@/src/shared/components/ui/Text/Text';

export const AccountSelector = ({
  accounts,
  selectedAccountId,
  onSelectAccount,
}: AccountSelectorProps) => {
  const {colors} = use(ThemeContext);

  return (
    <View style={styles.accountSelector}>
      {accounts.map(account => {
        const isSelected = account.id === selectedAccountId;

        return (
          <Pressable
            key={account.id}
            onPress={() => onSelectAccount(account.id)}
            style={[styles.accountCard, isSelected && styles.accountCardSelected]}
          >
            <View style={styles.accountIcon}>
              <Text size={20} weight={700} style={{color: colors.icon}}>
                $
              </Text>
            </View>

            <View style={styles.accountInfo}>
              <Text size={16} weight={600} style={{color: colors.text}}>
                {account.name}
              </Text>
              <Text size={14} weight={600} style={styles.accountBalance}>
                {account.initialBalanceMinor} {account.currencyCode}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};
