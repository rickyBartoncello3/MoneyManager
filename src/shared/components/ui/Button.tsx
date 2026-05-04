import {Pressable, StyleProp, Text, ViewStyle} from 'react-native';
import {globalStyles} from '../../theme/theme.tsx';
import {useContext} from 'react';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';

interface Props {
  text: string;
  styles?: StyleProp<ViewStyle>;

  onPress: () => void;
}

export const Button = ({text, styles, onPress}: Props) => {
  const {colors} = useContext(ThemeContext);

  return (
    <Pressable
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
    </Pressable>
  );
};
