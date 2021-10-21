import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getMusics from '../services/musicsAPI';
import Header from '../components/Header';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      musics: [],
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.getTracks(id);
  }

getTracks = async (param) => {
  const { match: { params: { id } } } = this.props;
  const tracks = await getMusics(param);
  this.setState({ musics: tracks });
  // console.log(tracks);
  return id;
}

collectionTrackCards = () => {
  const { musics } = this.state;
  // if (collection.length === 0) return <p>Nenhum álbum foi encontrado</p>;
  return (
    <div>
      <div className="collection-track-container">

        {
          musics.map((elem) => (
            <Link
              data-testid={ `link-to-album-${elem.collectionId}` }
              key={ elem.collectionId }
              to={ `/album/${elem.collectionId}` }
            >
              <div className="track-card">
                <img
                  src={ elem.artworkUrl100 }
                  alt={ `${elem.collectionName} ` }
                  className="track-image"
                />
                <p>{`Price ${elem.collectionPrice}`}</p>
                <p data-testid="album-name">{`Album: ${elem.collectionName}`}</p>
                <p data-testid="artist-name">{ elem.artistName }</p>
                {/* <p>{elem.releaseDate}</p> */}
                <p>{`Price ${elem.collectionPrice}`}</p>
              </div>

            </Link>
          ))
        }
      </div>
    </div>
  );
}

render() {
  const { musics } = this.state;
  console.log('musicas', musics);
  return (
    <div data-testid="page-album">
      <Header />
      <h1>Álbum</h1>
      <div>
        { this.collectionTrackCards() }
      </div>
    </div>
  );
}
}

export default Album;
