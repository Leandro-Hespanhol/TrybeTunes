import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import { createUser, getUser } from './services/userAPI';
import Header from './components/Header';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.getName = this.getNameHeader.bind(this);
    this.state = {
      name: '',
      artistName: '',
      loading: false,
      namePromisse: false,
      nameHeaderLoaded: false,
    };
  }

  componentDidMount() {
    this.getNameHeader();
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  async getNameHeader() {
    const { name } = await getUser();
    this.setState({
      name,
      nameHeaderLoaded: true,
    });
  }

  loadFunction = async () => {
    const { name } = this.state;
    this.setState({ loading: true });
    await createUser({ name });
    this.setState({ namePromisse: true });
    await this.setState({ loading: false });
  }

  render() {
    const { name, artistName, loading, namePromisse, nameHeaderLoaded } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login
              name={ name }
              onInputChange={ this.onInputChange }
              loadFunction={ this.loadFunction }
              loading={ loading }
              namePromisse={ namePromisse }
            />
          </Route>
          <Route exact path="/search">
            <Search
              name={ name }
              artistName={ artistName }
              nameHeaderLoaded={ nameHeaderLoaded }
              onInputChange={ this.onInputChange }
            />
          </Route>
          <Route exact path="/album/:id">
            <Album
              name={ name }
              nameHeaderLoaded={ nameHeaderLoaded }
            />
          </Route>
          <Route exact path="/favorites">
            <Favorites
              name={ name }
              nameHeaderLoaded={ nameHeaderLoaded }
            />
          </Route>
          <Route exact path="/profile">
            <Profile
              name={ name }
              nameHeaderLoaded={ nameHeaderLoaded }
            />
          </Route>
          <Route exact path="/profile/edit">
            <ProfileEdit
              name={ name }
              nameHeaderLoaded={ nameHeaderLoaded }
            />
          </Route>
          <Route exact path="/Header">
            <Header
              name={ name }
              nameHeaderLoaded={ nameHeaderLoaded }
            />
          </Route>
          <Route path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
