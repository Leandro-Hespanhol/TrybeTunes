import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { getUser } from '../services/userAPI';
import './Header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      loadingUser: false,
    };
  }

  componentDidMount() {
    this.getNameHeader();
  }

  getNameHeader = async () => {
    this.setState({ loadingUser: true });
    const user = await getUser();
    this.setState({ user: user.name, loadingUser: false });
  }

  render() {
    const { loadingUser, user } = this.state;
    if (!loadingUser) {
      return (
        <header data-testid="header-component" className="header-header">
          <div className="title-user">
            <p>TrybeTunes</p>
            <h1 data-testid="header-user-name">
              Bem vind@
              {' '}
              {user}
            </h1>
          </div>
          <nav className="links-nav">
            <div>
              <Link to="/TrybeTunes/search" data-testid="link-to-search">
                Search
              </Link>
            </div>
            <div>
              <Link to="/TrybeTunes/favorites" data-testid="link-to-favorites">
                {' '}
                Favorites
              </Link>
            </div>
            <div>
              <Link to="/TrybeTunes/profile" data-testid="link-to-profile">
                {' '}
                Profile
              </Link>
            </div>
          </nav>
        </header>
      );
    }
    return <Loading />;
  }
}

export default Header;
