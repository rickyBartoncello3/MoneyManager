import {IconName} from '@/src/shared/constants/iconNames';

export type BoxProps = {
  title: string;
  subTitle: string;
  onPress: () => void;
  icon: {name: IconName; color: string; backgroundColor?: string} | null | false;
};
