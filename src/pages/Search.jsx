import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
// import getAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends Component {
  render() {
    const {
      name,
      artistName,
      artistFunction,
      nameHeaderLoaded,
      onInputChange,
      artistNameSaved,
      artistCollection
    } = this.props;
    return (
      <div data-testid="page-search">
        <Header name={ name } nameHeaderLoaded={ nameHeaderLoaded } />
        <div data-testid="page-login">
          <form action="GET">
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
                onClick={ artistFunction }
              >
                Pesquisar
                {/* {console.log('SEARCH', getAlbumsAPI)} */}
              </button>
            </label>
          </form>
        </div>
        <div>
          Resultado de álbuns de:
          {' '}
          { artistNameSaved }
        </div>
        <div>
          { artistCollection }
        </div>
      </div>
    );
  }
}

export default Search;

Search.propTypes = {
  name: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  artistNameSaved: PropTypes.string.isRequired,
  nameHeaderLoaded: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  artistFunction: PropTypes.func.isRequired,
  // artistCollection: PropTypes.array.isRequired,
};
