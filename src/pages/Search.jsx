import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Search extends Component {
  render() {
    const { name, nameHeaderLoaded } = this.props;
    return (
      <div data-testid="page-search">
        <Header name={ name } nameHeaderLoaded={ nameHeaderLoaded } />
        <h1>Search</h1>
        {/* {console.log('search', this.props)} */}
      </div>
    );
  }
}

export default Search;

Search.propTypes = {
  name: PropTypes.string.isRequired,
  nameHeaderLoaded: PropTypes.bool.isRequired,
};
