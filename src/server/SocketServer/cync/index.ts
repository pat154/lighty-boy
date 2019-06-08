import { setColour } from '../../utils/lights';
import { RGBColour } from '../../../definitions/ColourWheel';

export interface CyncAction {
  type: string;
  action: CyncAction;
}

export interface CyncAction {
  type: string;
  colour: RGBColour;
}

const colours = {};

export default (action: CyncAction) => {
  console.log(action);
  switch (action.type){
    case 'PLAY':
      console.log('setting colour', action.colour);
      setColour(action.colour);
      break;
  }
};
