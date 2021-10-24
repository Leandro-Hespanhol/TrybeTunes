import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import '../pages/Album.css';
import Loading from './Loading';

class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      loadingFavorite: false,
      isChecked: false,
    };
  }

  async componentDidMount() {
    this.checkFavoriteSongs();
    // console.log('componentDidMount', await this.checkFavoriteSongs());
  }

    checkFavoriteSongs = async () => {
      const { isChecked } = this.state;
      const { music } = this.props;
      const bestSongs = await getFavoriteSongs();
      bestSongs.forEach((favSongs) => {
        if (favSongs.trackId === music.trackId) {
          this.setState({ isChecked: !isChecked });
        }
      });
      return bestSongs;
    }

    /* checkFavoriteSongs = async () => {
    const { isChecked } = this.state;
    const { favTracks, music } = this.props;
    const bestSongs = await getFavoriteSongs();
    bestSongs.forEach((favSongs) => {
      if (favSongs.trackId === music.trackId) {
        this.setState({ isChecked: !isChecked, favTracks: [...favSongs] });
      }
    });
  } */

  saveFavoriteSongs = async () => {
    const { isChecked } = this.state;
    const { music } = this.props;
    this.setState({ loadingFavorite: true });
    if (!isChecked) {
      await addSong(music);
    } else {
      await removeSong(music);
    }
    this.setState({ loadingFavorite: false });
  }

  handleChecked = async () => {
    const { isChecked } = this.state;
    this.setState({
      isChecked: !isChecked,
    });
  }

  render() {
    const { music: { trackName, previewUrl, trackId } } = this.props;
    // const { favTracks: { trackName, previewUrl, trackId } } = this.props;
    const { loadingFavorite, isChecked } = this.state;
    // console.log('render', getFavoriteSongs());
    if (loadingFavorite) return <Loading />;
    return (
      <div>
        <div className="track-container" key={ trackId }>
          <p>{ trackName }</p>
          <audio data-testid="audio-component" src={ previewUrl } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            <code>audio</code>
          </audio>
          <label htmlFor={ trackId }>
            Favorita
            <input
              className="fa fa-heart"
              data-testid={ `checkbox-music-${trackId}` }
              type="checkbox"
              name="checked"
              id={ trackId }
              onChange={ this.handleChecked }
              checked={ isChecked }
              saveFavoriteSongs={ this.saveFavoriteSongs }
              onClick={ this.saveFavoriteSongs }
            />
          </label>
        </div>
      </div>);
  }
}

export default MusicCard;

MusicCard.propTypes = {
  music: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number])).isRequired,
};
