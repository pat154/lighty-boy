
import { RGBColour } from '../../definitions/ColourWheel';

const accentColour: RGBColour = {
  r: 245,
  g: 25,
  b: 10,
};

const initialState = {
  accentColour
};

export default (state = initialState) => state;
