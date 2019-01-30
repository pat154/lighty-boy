// tslint:disable-next-line:import-name
import styled from 'styled-components';
import { darken } from 'polished';

import { COLOUR_BODY_BACKGROUND } from '../../constants';
import { HEIGHT, COLOUR_ACCENT } from './constants';

export default styled.header`
  text-align: center;
  padding: 10px;
  height: ${HEIGHT};
  background: ${darken(0.1, COLOUR_BODY_BACKGROUND)}

  .Header__accent {
    color: ${COLOUR_ACCENT};
  }
`;
