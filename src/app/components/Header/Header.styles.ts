// tslint:disable-next-line:import-name
import styled from 'styled-components';
import { darken } from 'polished';

import { COLOUR_BODY_BACKGROUND } from '../../constants';
import { HEIGHT, COLOUR_ACCENT } from './constants';
import { RGBColour } from '../../../definitions/ColourWheel';

export interface HeaderAccentProps {
  accentColour: RGBColour;
}

export const HeaderAccent = styled.span
  .attrs((props: HeaderAccentProps) => ({
    style: {
      color: `rgba(${props.accentColour.r}, ${props.accentColour.g}, ${props.accentColour.b}, 1)`,
    },
  }))<HeaderAccentProps>``;

export default styled.header`
  text-align: center;
  padding: 10px;
  height: ${HEIGHT};
  background: ${darken(0.1, COLOUR_BODY_BACKGROUND)}
`;
