import { connect } from 'react-redux';

import ColourWheel from './ColourWheel';
import { UPDATE_COLOUR } from './actionTypes';
import { RGBColour, ColourWheelState } from '../../definitions/ColourWheel';


const currentColour: RGBColour = {
    r: 255,
    g: 255,
    b: 255,
};

const initialState:ColourWheelState = {
  currentColour
};

const mapStateToProps = (state: any = initialState) => {
  return {
    currentColour: state.colourWheel.currentColour
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateColour: (colour: RGBColour) => dispatch({
      type: UPDATE_COLOUR,
      payload: colour
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ColourWheel);
