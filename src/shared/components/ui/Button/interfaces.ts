import {StyleProp, ViewStyle} from 'react-native';
import {ButtonProps as RNButtonProps} from 'react-native-paper';

export interface ButtonProps extends RNButtonProps {
  text: string;
  styles?: StyleProp<ViewStyle>;

  onPress: () => void;
}
