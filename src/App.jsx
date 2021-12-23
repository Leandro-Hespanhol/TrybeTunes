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
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/TrybeTunes/">
            <Login />
          </Route>
          <Route path="/TrybeTunes/search">
            <Search />
          </Route>
          <Route
            exact
            path="/TrybeTunes/album/:id"
            render={ (props) => <Album { ...props } /> }
          />
          <Route path="/TrybeTunes/favorites">
            <Favorites />
          </Route>
          <Route exact path="/TrybeTunes/profile">
            <Profile />
          </Route>
          <Route exact path="/TrybeTunes/profile/edit">
            <ProfileEdit />
          </Route>
          <Route path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
