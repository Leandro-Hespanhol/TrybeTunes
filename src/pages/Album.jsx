import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import Loading from '../components/Loading';
// import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import './Album.css';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      musics: [],
      favTracks: [],
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
  // const favoriteTracks = await getFavoriteSongs(param);
  this.setState({
    musics: [...tracks],
    // favTracks: [...favoriteTracks],
    loadingTracks: false });
  // console.log(tracks);
}

render() {
  const { musics, loadingTracks, favTracks } = this.state;
  if (loadingTracks || musics.length === 0) return <Loading />;
  // console.log(this.state);
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
            <MusicCard key={ music.trackId } music={ music } favTracks={ favTracks } />))}
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
