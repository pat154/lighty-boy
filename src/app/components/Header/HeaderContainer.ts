import { connect } from 'react-redux';

import Header from './Header';
import { AppState } from '../../definitions';
import { HeaderState } from '../../definitions/Header';

const mapStateToProps = (state: AppState) => {
  return {
    accentColour: state.colourWheel.currentColour
  }
}

export default connect(
  mapStateToProps,
  null,
)(Header);
