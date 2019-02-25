import { Action } from 'redux';

import { RGBColour } from '../../definitions/ColourWheel';

export interface ColourAction extends Action {
  type: string;
  payload: RGBColour;
}
