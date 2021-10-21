import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../pages/Album.css';

class MusicCard extends Component {
  render() {
    const { music: { trackName, previewUrl, trackId } } = this.props;
    return (
      <div>
        <div className="track-container">
          <p>{ trackName }</p>
          <audio data-testid="audio-component" src={ previewUrl } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            <code>audio</code>
          </audio>
          <div>

            <div className="track-card" key={ trackId } />

          </div>
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
