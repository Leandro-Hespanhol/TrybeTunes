import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Album extends Component {
  render() {
    const { name, nameHeaderLoaded } = this.props;
    return (
      <div data-testid="page-album">
        <Header name={ name } nameHeaderLoaded={ nameHeaderLoaded } />
        <h1>Álbum</h1>
      </div>
    );
  }
}

export default Album;

Album.propTypes = {
  name: PropTypes.string.isRequired,
  nameHeaderLoaded: PropTypes.bool.isRequired,
};
