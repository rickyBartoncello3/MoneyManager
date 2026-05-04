import {StyleProp, View, ViewStyle} from 'react-native';
import {ReactNode, useContext} from 'react';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import {globalStyles} from '@/src/shared/theme/theme';

interface Props {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  margin?: boolean;
}

export const CustomView = ({style, children, margin = false}: Props) => {
  const {colors} = useContext(ThemeContext);

  return (
    <View
      style={[
        globalStyles.mainContainer,
        margin ? globalStyles.globalMargin : null,
        {backgroundColor: colors.background},
        style,
      ]}
    >
      {children}
    </View>
  );
};
