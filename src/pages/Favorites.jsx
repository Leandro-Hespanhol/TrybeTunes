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
    this.getFavoritesMusics = this.getFavoritesMusics.bind(this);
  }

  componentDidMount() {
    this.getFavoritesMusics();
  }

  getFavoritesMusics = async () => {
    this.setState({ loadingFavSongs: true });
    const favTracks = await getFavoriteSongs();
    this.setState({ favFavSongs: [...favTracks] });
    this.setState({ loadingFavSongs: false });
  }

  removeSong = (trackId) => {
    const { favFavSongs } = this.state;
    const actualFaves = favFavSongs
      .filter((favSong) => favSong.trackId !== trackId);
    this.setState({ favFavSongs: actualFaves });
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
            removeSongFromFavs={ this.removeSong }
          />))}
        </div>
      </div>
    );
  }
}

export default Favorites;
