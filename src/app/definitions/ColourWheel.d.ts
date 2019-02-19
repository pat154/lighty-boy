export interface RGBColour {
  r: number;
  g: number;
  b: number;
}

export interface ColourWheelState {
  currentColour: RGBColour;
}

export interface UpdateColourAction {
  type: string;
  payload: RGBColour;
}

export interface ColourWheelProps {
  currentColour: RGBColour;
  updateColour: (colour: RGBColour) => void;
}