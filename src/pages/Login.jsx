import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';

class Login extends Component {
  render() {
    const { name, onInputChange, loadFunction, loading, namePromisse } = this.props;
    if (loading) {
      return (
        <div>
          <Loading />
          { namePromisse && <Redirect to="/search" /> }
        </div>
      );
    }

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
              onChange={ onInputChange }
            />
            <button
              type="button"
              data-testid="login-submit-button"
              disabled={ name.length < '3' }
              onClick={ loadFunction }
              // onClick={ async () => {
              //   <Carregando />;
              //   await createUser({ name })
              //     .then(<Redirect to="/search" />);
              // } }
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

Login.propTypes = {
  name: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  loadFunction: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  namePromisse: PropTypes.bool.isRequired,
};
