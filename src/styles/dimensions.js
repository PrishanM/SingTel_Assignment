import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const CARD_SIZE = (width - 44)/3

const dimensions = {
  viewPadding : 12,
  margin1 : 4,
  margin2 : 6,
  margin3 : 8,
  margin4 : 10,
  borderRadius : 8,
  buttonIconSize : 20,
  buttonHeight : 54,
  height,
  width,
  cardSize : CARD_SIZE
};

export default dimensions;
