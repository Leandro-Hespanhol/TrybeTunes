import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser } from '../services/userAPI';
import './Profile.css';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      description: '',
      image: '',
      loadingProfile: true,
    };
  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser = async () => {
    const actualUser = await getUser();
    this.setState({ loadingProfile: false, ...actualUser });
  }

  profileTemplate = () => {
    const { name, image, email, description } = this.state;
    return (
      <div className="profile-div">
        <div className="image-link-div">
          <img data-testid="profile-image" src={ image } alt={ name } />
          <Link to="/profile/edit">Editar perfil</Link>
        </div>
        <h2>{ name }</h2>
        <h2>{ name }</h2>
        <p>{ email }</p>
        <p>{ description }</p>
      </div>);
  }

  render() {
    // console.log('render', this.state);
    const { loadingProfile } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />

        {(loadingProfile) ? <Loading /> : this.profileTemplate()}
      </div>
    );
  }
}

export default Profile;
