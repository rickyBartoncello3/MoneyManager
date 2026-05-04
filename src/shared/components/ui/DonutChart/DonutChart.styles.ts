import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  centerContent: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
  },
  centerValue: {
    letterSpacing: -0.2,
  },
  centerLabel: {
    marginTop: 2,
  },
});
