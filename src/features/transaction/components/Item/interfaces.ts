import {IconName} from '@/src/shared/constants/iconNames';

type Item = {
  name: string;
  icon: IconName;
  color: string;
  backgroundColor: string;
};

export type ItemProps<T extends Item> = {
  item: T;
  isSelected: boolean;
  onSelect: <T>(item: T) => void;
};
