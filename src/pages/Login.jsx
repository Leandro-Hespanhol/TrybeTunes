import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      loading: false,
      loadPromisse: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  loadFunction = async () => {
    const { name } = this.state;
    this.setState({ loading: true });
    await createUser({ name });
    this.setState({ loadPromisse: true });
  }

  render() {
    const { name, loading, loadPromisse } = this.state;

    if (loadPromisse) return <Redirect to="/search" />;

    if (loading) return <Loading />;

    return (
      <div data-testid="page-login">
        <h1>Login</h1>
        <form action="">
          <label htmlFor="login-input">
            <input
              data-testid="login-name-input"
              type="text"
              name="name"
              value={ name }
              onChange={ this.onInputChange }
            />
            <button
              type="button"
              data-testid="login-submit-button"
              disabled={ name.length < '3' }
              onClick={ this.loadFunction }
            >
              Entrar
            </button>
          </label>
        </form>
      </div>
    );
  }
}

export default Login;
