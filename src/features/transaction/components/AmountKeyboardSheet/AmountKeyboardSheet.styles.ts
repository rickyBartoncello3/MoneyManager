import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingBottom: 16,
    gap: 8,
  },

  header: {
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  smartAddRow: {
    flexDirection: 'row',
    gap: 8,
  },

  smartAddButton: {
    flex: 1,
    height: 38,
    borderRadius: 10,
    backgroundColor: 'rgba(22, 163, 74, 0.16)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  keyboardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: 8,
  },

  keyButton: {
    width: '30.9%',
    height: 44,
    borderRadius: 10,
    backgroundColor: 'rgba(148, 163, 184, 0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  operatorButton: {
    backgroundColor: 'rgba(148, 163, 184, 0.16)',
    width: '18%',
  },

  equalButton: {
    backgroundColor: '#16A34A',
  },

  equalText: {
    color: 'white',
  },
});

export default styles;
