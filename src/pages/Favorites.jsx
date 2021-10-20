import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Favorites extends Component {
  render() {
    const { name, nameHeaderLoaded } = this.props;
    return (
      <div data-testid="page-favorites">
        <Header name={ name } nameHeaderLoaded={ nameHeaderLoaded } />
        {console.log('favorites', this.props)}
        <h1>Favorites</h1>
      </div>
    );
  }
}

export default Favorites;

Favorites.propTypes = {
  name: PropTypes.string.isRequired,
  nameHeaderLoaded: PropTypes.bool.isRequired,
};
