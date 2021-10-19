import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Login extends Component {
  render() {
    const { name, onInputChange } = this.props;
    const TRES = 3;

    return (
      <div data-testid="page-login">
        <h1>Login</h1>
        <form action="">
          <label htmlFor="login-name-input" data-testid="login-name-input">
            <input
              type="text"
              name="name"
              value={ name }
              onChange={ onInputChange }
            />
            <button
              type="button"
              data-testid="login-submit-button"
              disabled={ name.length < TRES }
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
};
