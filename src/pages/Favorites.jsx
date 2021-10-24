import React, { Component } from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Favorites extends Component {
  checkFavoriteSongs = async () => {
    const { isChecked } = this.state;
    const { music } = this.props;
    const bestSongs = await getFavoriteSongs();
    bestSongs.map((favSongs) => {
      <MusicCard />
    })}

  render() {
    return (
      <div data-testid="page-favorites">
        <Header />
        <h1>Favorites</h1>
      </div>
    );
  }
}

export default Favorites;
