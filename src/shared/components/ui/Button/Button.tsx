import {View} from 'react-native';
import {useContext} from 'react';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import {globalStyles} from '@/src/shared/theme/theme';
import {ActivityIndicator, Button as RNButton} from 'react-native-paper';
import Text from '@/src/shared/components/ui/Text/Text';
import {ButtonProps} from '@/src/shared/components/ui/Button/interfaces';

export const Button = ({text, styles, onPress, ...props}: ButtonProps) => {
  const {colors, currentTheme} = useContext(ThemeContext);

  return (
    <RNButton
      theme={currentTheme}
      onPress={onPress}
      style={[
        globalStyles.btnPrimary,
        {
          backgroundColor: props.disabled ? colors.badgeBackground : colors.primary,
        },
        styles,
      ]}
      {...props}
    >
      {props.loading ? (
        <View style={{borderWidth: 1, backgroundColor: 'red'}}>
          <ActivityIndicator theme={currentTheme} />
        </View>
      ) : (
        <Text
          size={globalStyles.btnPrimaryText.fontSize}
          weight={Number(globalStyles.btnPrimaryText.fontWeight)}
          style={[
            globalStyles.btnPrimaryText,
            {
              color: props.disabled ? colors.textMuted : colors.buttonTextColor,
            },
          ]}
        >
          {text}
        </Text>
      )}
    </RNButton>
  );
};
