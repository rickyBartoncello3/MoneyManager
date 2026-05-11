import {PropsWithChildren, use, useContext} from 'react';

import {StyleProp, ViewStyle, View} from 'react-native';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';

interface Props extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

export const Card = ({style, children}: Props) => {
  const {colors} = use(ThemeContext);

  return (
    <View
      style={[
        {
          backgroundColor: colors.cardBackground,
          borderRadius: 10,
          padding: 10,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};
