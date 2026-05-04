import {Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useContext} from 'react';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import {globalStyles} from '@/src/shared/theme/theme';

interface Props {
  text: string;
  safe?: boolean;
  backgroundColor?: string;
}

export const SubTitle = ({text, safe = false, backgroundColor}: Props) => {
  const {colors} = useContext(ThemeContext);
  const {top} = useSafeAreaInsets();

  return (
    <Text
      style={{
        ...globalStyles.subTitle,
        color: colors.text,
        marginTop: safe ? top : 0,
        marginBottom: 10,
        backgroundColor: backgroundColor ? backgroundColor : colors.background,
      }}
    >
      {text}
    </Text>
  );
};
