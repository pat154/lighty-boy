import { RGBColour } from '../../definitions/ColourWheel';
import { exec } from'child_process';

export const setColour = (colour: RGBColour) => {
  exec(`python src/lights/setcolour.py ${colour.r} ${colour.g} ${colour.b}`, (
    error,
  ) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
  });
};

export const clear = () => {
  exec('python src/lights/ledclear.py', (
    error,
  ) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
  });
}
