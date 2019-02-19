// tslint:disable-next-line:import-name
import styled from 'styled-components';
import { darken } from 'polished';

import { COLOUR_BODY_BACKGROUND } from '../../constants';
import { HEIGHT, COLOUR_ACCENT } from './constants';
import { RGBColour } from '../../definitions/ColourWheel';
export interface StyledHeaderProps {
  accentColour: RGBColour
}

export default styled.header`
  text-align: center;
  padding: 10px;
  height: ${HEIGHT};
  background: ${darken(0.1, COLOUR_BODY_BACKGROUND)}

  .Header__accent {
    color: ${(props: StyledHeaderProps) => 
      `rgba(${props.accentColour.r}, ${props.accentColour.g}, ${props.accentColour.b}, 1)`};
  }
`;
