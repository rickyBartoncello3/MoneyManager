import {StyleProp, View, ViewStyle} from 'react-native';
import {ReactNode, use, useContext} from 'react';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import {globalStyles} from '@/src/shared/theme/theme';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface CustomViewProps {
  isScrolling?: boolean;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  margin?: boolean;
}

export const CustomView = ({
  isScrolling = true,
  style,
  children,
  margin = false,
}: CustomViewProps) => {
  const {colors} = use(ThemeContext);
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
      {isScrolling ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1, marginTop: top}}
        >
          {children}
        </ScrollView>
      ) : (
        children
      )}
    </View>
  );
};
