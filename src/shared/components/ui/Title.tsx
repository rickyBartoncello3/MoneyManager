import {Text} from 'react-native';
import {globalStyles} from '../../theme/theme.tsx';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {use, useContext} from 'react';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';

interface Props {
  text: string;
  safe?: boolean;
  white?: boolean;
}

export const Title = ({text, safe = false, white = false}: Props) => {
  const {top} = useSafeAreaInsets();
  const {colors} = use(ThemeContext);

  return (
    <Text
      style={{
        ...globalStyles.title,
        marginTop: safe ? top : 0,
        marginBottom: 10,
        color: white ? 'white' : colors.text,
      }}
    >
      {text}
    </Text>
  );
};
