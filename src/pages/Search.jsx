import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import './search.css';
// import TrackCard from '../components/TrackCard';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      artistName: '',
      artistNameSaved: '',
      loadingCollection: false,
      collection: [],
    };
  }

  artistFunction = async () => {
    const { artistName } = this.state;
    this.setState({ loadingCollection: true, artistNameSaved: artistName });
    const album = await searchAlbumsAPI(artistName);
    this.setState({ loadingCollection: false, collection: album, artistName: '' });
    console.log(album);
  };

  collectionCards = () => {
    const { collection } = this.state;
    if (collection.length === 0) return <p>Nenhum álbum foi encontrado</p>;
    return (
      <div>
        <div className="collection-container">

          {
            collection.map((elem) => (
              <Link
                data-testid={ `link-to-album-${elem.collectionId}` }
                key={ elem.collectionId }
                to={ `/album/${elem.collectionId}` }
              >
                <div className="album-card">
                  <img
                    src={ elem.artworkUrl100 }
                    alt={ `${elem.collectionName} ` }
                    className="track-image"
                  />
                  <p>{elem.collectionName}</p>
                  {/* <p>{elem.releaseDate}</p> */}
                  <p>{`Price ${elem.collectionPrice}`}</p>
                </div>

              </Link>
            ))
          }
        </div>
      </div>
    );
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { artistName, artistNameSaved, loadingCollection } = this.state;
    if (loadingCollection) return <Loading />;
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
          { this.collectionCards() }
        </div>
      </div>
    );
  }
}

export default Search;
