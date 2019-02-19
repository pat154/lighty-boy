import { combineReducers } from "redux";
import colourWheelReducer from "../components/ColourWheel/reducer";
import HeaderReducer from "../components/Header/reducer";

export default combineReducers({ 
  colourWheel: colourWheelReducer,
  Header: HeaderReducer,
});
