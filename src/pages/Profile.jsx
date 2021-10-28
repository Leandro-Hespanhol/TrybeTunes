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
      userDetails: '',
      loadingProfile: true,
    };
  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser = async () => {
    const actualUser = await getUser();
    this.setState({ userDetails: actualUser, loadingProfile: false });
  }

  render() {
    console.log('render', this.state);
    const { userDetails: { name, image, email, description },
      loadingProfile } = this.state;
    if (loadingProfile) return <Loading />;
    return (
      <div data-testid="page-profile">
        <Header />
        <h1>Profile</h1>
        <div className="profile-div">
          <div className="image-link-div">
            <img data-testid="profile-image" src={ image } alt={ name } />
            {' '}
            <Link to="/profile/edit">Editar Perfil</Link>
          </div>
          <h2>{ name }</h2>
          <p>{ email }</p>
          <p>{ description }</p>
        </div>
      </div>
    );
  }
}

export default Profile;
