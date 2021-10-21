import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
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

  saveFavoriteSongs = async () => {
    const { music } = this.props;
    this.setState({ loadingFavorite: true });
    await addSong(music);
    this.setState({ loadingFavorite: false });
  }

  handleChecked = () => {
    const { isChecked } = this.state;
    this.setState({
      isChecked: !isChecked,
    });
  }

  render() {
    const { music: { trackName, previewUrl, trackId } } = this.props;
    const { loadingFavorite, isChecked } = this.state;
    // console.log('render', this.props);
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
          <label htmlFor="favorite-label" data-testid={ `checkbox-music-${trackId}` }>
            Favorita
            <input
              type="checkbox"
              name="checked"
              id="favorite-label"
              checked={ isChecked }
              onChange={ this.handleChecked }
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
