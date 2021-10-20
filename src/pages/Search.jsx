import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Search extends Component {
  render() {
    const { name, artistName, nameHeaderLoaded, onInputChange } = this.props;
    return (
      <div data-testid="page-search">
        <Header name={ name } nameHeaderLoaded={ nameHeaderLoaded } />
        <div data-testid="page-login">
          <form action="">
            <label htmlFor="search-input">
              <input
                data-testid="search-artist-input"
                type="text"
                name="artistName"
                value={ artistName }
                onChange={ onInputChange }
                placeholder="Pesquise o artista"
              />
              <button
                type="button"
                data-testid="search-artist-button"
                disabled={ artistName.length < '2' }
                // onClick={ loadFunction }
              >
                Pesquisar
                {console.log('search', this.props)}
              </button>
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;

Search.propTypes = {
  name: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  nameHeaderLoaded: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
