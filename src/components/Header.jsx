import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import './Header.css';

class Header extends Component {
  render() {
    const { name, nameHeaderLoaded } = this.props;
    if (nameHeaderLoaded) {
      return (
        <header data-testid="header-component" className="header-header">
          <div className="title-user">
            <p>TrybeTunes</p>
            <h1 data-testid="header-user-name">
              Bem vind@
              {' '}
              {name}
            </h1>
          </div>
          <nav className="links-nav">
            <div>
              <Link to="/search" data-testid="link-to-search">
                Search
              </Link>
            </div>
            <div>
              <Link to="/favorites" data-testid="link-to-favorites">
                {' '}
                Favorites
              </Link>
            </div>
            <div>
              <Link to="/profile" data-testid="link-to-profile">
                {' '}
                Profile
              </Link>
            </div>
          </nav>
        </header>
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
