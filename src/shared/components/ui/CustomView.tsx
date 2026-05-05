import {StyleProp, View, ViewStyle} from 'react-native';
import {ReactNode, useContext} from 'react';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import {globalStyles} from '@/src/shared/theme/theme';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  margin?: boolean;
}

export const CustomView = ({style, children, margin = false}: Props) => {
  const {colors} = useContext(ThemeContext);
  const {top} = useSafeAreaInsets();

  return (
    <View
      style={[
        globalStyles.mainContainer,
        margin ? globalStyles.globalMargin : null,
        {backgroundColor: colors.background},
        style,
      ]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1, marginTop: top}}
      >
        {children}
      </ScrollView>
    </View>
  );
};
