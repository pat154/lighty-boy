/// <reference path="./iro.d.ts" />

import { HeaderState } from './Header';
import { ColourWheelState } from './ColourWheel';

interface AppState {
  header: HeaderState;
  colourWheel: ColourWheelState;
}