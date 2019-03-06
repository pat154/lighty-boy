import { UPDATE_COLOUR } from './actions';
import { ColourAction } from './actionTypes';
import { RGBColour } from '../../../definitions/ColourWheel';

const currentColour: RGBColour = {
  r: 255,
  g: 255,
  b: 255,
};

const initialState = {
  currentColour,
};

export default (state = initialState, action: ColourAction) => {
  switch (action.type) {
    case UPDATE_COLOUR: {
      return Object.assign({}, state, {
        currentColour: action.payload,
      });
    }
    default: {
      return state;
    }
  }
};
