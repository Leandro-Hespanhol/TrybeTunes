import React, { Component } from 'react';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import Loading from '../components/Loading';

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      loadingFavSongs: false,
      favFavSongs: [],
    };
  }

  componentDidMount() {
    this.favoritesHtml();
  }

  favoritesHtml = async () => {
    this.setState({ loadingFavSongs: true });
    const constante = await getFavoriteSongs();
    this.setState({ favFavSongs: [...constante] });
    this.setState({ loadingFavSongs: false });
  }

  render() {
    const { favFavSongs, loadingFavSongs } = this.state;
    // const { saveFavoriteSongs } = this.props;
    if (loadingFavSongs) return <Loading />;
    if (!favFavSongs) return <Loading />;
    return (
      <div data-testid="page-favorites">
        <Header />
        <h1>Favorites</h1>
        <div>
          {favFavSongs.map((favSongs) => (<MusicCard
            key={ favSongs.trackId }
            music={ favSongs }
            saveFavoriteSongs={ saveFavoriteSongs }
          />))}
        </div>
      </div>
    );
  }
}

export default Favorites;
