import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

class Header extends Component {
  render() {
    const { name, nameHeaderLoaded } = this.props;
    if (nameHeaderLoaded) {
      return (
        <div data-testid="page-Header">
          <header data-testid="header-component">
            Bem vinda
            {' '}
            {name}
            {console.log('nome', name)}
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
