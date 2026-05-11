type Value = {
  value: string;
  label: string;
};

export interface SegmentedButtonsProps {
  initialValue: string;
  handleOnChange: (newValue: string) => void;
  values: Value[];
}
