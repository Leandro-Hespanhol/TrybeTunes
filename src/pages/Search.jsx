import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Header from '../components/Header';
// import TrackCard from '../components/TrackCard';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      artistName: '',
      artistNameSaved: '',
    };
  }

  // componentDidMount() {
  //   this.getAlbum('pink');
  // }

  // getAlbum = (artist) => {
  //   searchAlbumsAPI(artist)
  //     .then((resp) => console.log(resp));
  // }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  artistFunction = () => {
    const { artistName } = this.state;
    this.setState({ artistNameSaved: artistName });
    this.setState({ artistName: '' });
    // console.log(artistNameSaved);
  }

  render() {
    const { artistName, artistNameSaved } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <div>
          <form action="">
            <label htmlFor="search-input">
              <input
                data-testid="search-artist-input"
                type="text"
                name="artistName"
                value={ artistName }
                onChange={ this.onInputChange }
                placeholder="Pesquise o artista"
              />
              <button
                type="button"
                data-testid="search-artist-button"
                disabled={ artistName.length < '2' }
                onClick={ this.artistFunction }
              >
                Pesquisar
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
          {/* <TrackCard artistCollection={ artistCollection } /> */}
        </div>
      </div>
    );
  }
}

export default Search;
