import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import Loading from '../components/Loading';
import './Album.css';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      musics: [],
      loadingTracks: false,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.getTracks(id);
  }

getTracks = async (param) => {
  this.setState({ loadingTracks: true });
  const tracks = await getMusics(param);
  this.setState({ musics: [...tracks], loadingTracks: false });
  // console.log(tracks);
}

render() {
  const { musics, loadingTracks } = this.state;
  if (loadingTracks || musics.length === 0) return <Loading />;
  // const musics = musicsList.slice(1);
  return (
    <div data-testid="page-album">
      <Header />
      <h1>Álbum</h1>
      <div className="album-tracks-container">
        <div className="div-album">
          {/* {console.log('musics', musics)} */}
          <img
            src={ musics[0].artworkUrl100 }
            alt={ `${musics[0].collectionName} ` }
            className="track-image"
          />
          <p data-testid="artist-name">{`${musics[0].artistName}`}</p>
          <p data-testid="album-name">{`${musics[0].collectionName}`}</p>
          <p>{`Price ${musics[0].collectionPrice}`}</p>
        </div>
        <div>
          {musics.slice(1).map((music) => (
            <MusicCard key={ music.trackId } clasName="music" music={ music } />))}
          {/* { this.collectionTrackCards() } */}
        </div>
      </div>
    </div>
  );
}
}

export default Album;

Album.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.objectOf(PropTypes.string),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};
