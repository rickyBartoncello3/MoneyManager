import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const RemoveCircle = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    {...props}
  >
    <Path d="M19.002 12L5.00001 12" />
  </Svg>
);

export default RemoveCircle;
