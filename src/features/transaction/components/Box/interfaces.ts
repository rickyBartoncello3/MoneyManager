import {IconName} from '@/src/shared/constants/iconNames';
import {ReactNode} from 'react';

export type BoxProps = {
  title: string;
  subTitle: string | ReactNode;
  onPress: () => void;
  icon: {name: IconName; color: string; backgroundColor?: string} | null | false;
};
