import { RGBColour } from '../../definitions/ColourWheel';
import { exec } from'child_process';

export const setColour = (colour: RGBColour) => {
  exec(`python src/lights/setcolour.py ${colour.r} ${colour.g} ${colour.b}`, (
    error,
    stdout,
    stderr,
  ) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
};
