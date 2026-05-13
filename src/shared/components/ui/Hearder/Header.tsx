import React, {use} from 'react';
import {View} from 'react-native';
import styles from './Header.styles';
import {HeaderProps} from './interfaces';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import Text from '@/src/shared/components/ui/Text/Text';

export const Header = ({monthLabel}: HeaderProps) => {
  const {colors} = use(ThemeContext);

  return (
    <View style={styles.root}>
      <View>
        <Text size={22} weight={900} style={{color: colors.text}}>
          Home
        </Text>
      </View>
      <View>
        <Text size={22} weight={900} style={{color: colors.text}}>
          {monthLabel}
        </Text>
      </View>
      <View>
        <Text size={22} weight={900} style={{color: colors.text}}>
          Home
        </Text>
      </View>
    </View>
  );
};
