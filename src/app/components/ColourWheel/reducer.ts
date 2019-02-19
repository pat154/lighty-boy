import { UPDATE_COLOUR } from "./actionTypes";
import { RGBColour } from '../../definitions/ColourWheel';
import { Action } from "redux";

const currentColour: RGBColour = {
  r: 255,
  g: 255,
  b: 255,
};

const initialState = {
  currentColour
};

interface ColourAction extends Action {
  type: string;
  payload: RGBColour;
}

export default (state = initialState, action: ColourAction) => {
  switch (action.type) {
    case UPDATE_COLOUR: {
      return Object.assign({}, state, {
        currentColour: action.payload
      });
    }
    default: {
      return state;
    }
  }
};
