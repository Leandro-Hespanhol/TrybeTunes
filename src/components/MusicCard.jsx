import React, { Component } from 'react';

class TrackCard extends Component {
  render() {
    const { musics } = this.props;
    const musicList = musics.slice(1);
    return (
      <div>
        <div className="collection-track-container">
          <img
            src={ musicList.artworkUrl100 }
            alt={ `${musicList.collectionName} ` }
            className="track-image"
          />
          <p data-testid="artist-name">{`Artist Name ${musicList.artistName}`}</p>
          <p data-testid="album-name">{`Collection Name ${musicList.collectionName}`}</p>
          <p>{`Price ${musicList.collectionPrice}`}</p>
          <div>
            { musicList.map((elem, idx) => (
              <div className="track-card" key={ elem.trackName }>
                <p>{`Track Name ${idx + 1}: ${elem.trackName}`}</p>
                <audio data-testid="audio-component" src={ elem.previewUrl } controls>
                  <track kind="captions" />
                </audio>
              </div>

            ))}
          </div>
        </div>
        {console.log('musicCard', musicList)}
      </div>);
  }
}

export default TrackCard;
