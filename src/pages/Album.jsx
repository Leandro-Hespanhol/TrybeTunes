import React, { Component } from 'react';
import getMusics from '../services/musicsAPI';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import Loading from '../components/Loading';

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
  this.setState({ musics: tracks, loadingTracks: false });
  // console.log(tracks);
}

render() {
  const { musics } = this.state;
  // if (loadingTracks && musicsList.length === 0) return <Loading />;
  // const musics = musicsList.slice(1);
  return (
    <div data-testid="page-album">
      <Header />
      <h1>Álbum</h1>
      <div>
        <MusicCard key={ musics.trackId } musics={ musics } />
        {/* { this.collectionTrackCards() } */}
      </div>
    </div>
  );
}
}

export default Album;
