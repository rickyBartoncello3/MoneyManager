import {StyleProp, Text, ViewStyle} from 'react-native';
import {use} from 'react';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import {globalStyles} from '@/src/shared/theme/theme';
import {TouchableRipple} from 'react-native-paper';

interface Props {
  text: string;
  styles?: StyleProp<ViewStyle>;

  onPress: () => void;
}

export const Button = ({text, styles, onPress}: Props) => {
  const {colors} = use(ThemeContext);

  return (
    <TouchableRipple
      onPress={onPress}
      style={({pressed}) => [
        globalStyles.btnPrimary,
        {
          opacity: pressed ? 0.8 : 1,
          backgroundColor: colors.primary,
        },
        styles,
      ]}
    >
      <Text
        style={[
          globalStyles.btnPrimaryText,
          {
            color: colors.buttonTextColor,
          },
        ]}
      >
        {text}
      </Text>
    </TouchableRipple>
  );
};
