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

    if (loadPromisse) return <Redirect to="/TrybeTunes/search" />;

    if (loading) return <Loading />;

    return (
      <div data-testid="page-login" className="login-page-body">
        <form action="" className="login-page-fieldset">
          <iframe
            src="https://giphy.com/embed/tqfS3mgQU28ko"
            title="login-gif"
            width="480"
            height="360"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          />

          <h1 className="login-login">Login</h1>
          <label htmlFor="login-input" className="login-page-label">
            <input
              className="login-page-input"
              data-testid="login-name-input"
              type="text"
              name="name"
              value={ name }
              onChange={ this.onInputChange }
            />
            <button
              type="button"
              className="login-page-enter-button"
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
