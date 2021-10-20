import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

class Header extends Component {
  render() {
    const { name, nameHeaderLoaded } = this.props;
    if (nameHeaderLoaded) {
      return (
        <div data-testid="page-Header">
          <p>TrybeTunes</p>
          <header data-testid="header-component">
            <h1 data-testid="header-user-name">
              Bem vinda
              {' '}
              { name }
              {/* {console.log('header', this.props)} */}
            </h1>
          </header>
        </div>
      );
    }
    return <Loading />;
  }
}

export default Header;

Header.propTypes = {
  name: PropTypes.string,
  nameHeaderLoaded: PropTypes.bool,
};

Header.defaultProps = {
  name: '',
  nameHeaderLoaded: false,
};
