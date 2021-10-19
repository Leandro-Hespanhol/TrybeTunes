import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      name: '',
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name } = this.state;
    return (
      <BrowserRouter>
        <p>TrybeTunes</p>
        <Switch>
          <Route exact path="/">
            <Login name={ name } onInputChange={ this.onInputChange } />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/album/:id">
            <Album />
          </Route>
          <Route exact path="/favorites">
            <Favorites />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/profile/edit">
            <ProfileEdit />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
