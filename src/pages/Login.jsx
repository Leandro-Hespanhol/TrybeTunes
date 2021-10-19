import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div data-testid="page-login">
        <h1>Login</h1>
        <div data-testid="login-name-input">
          <label htmlFor="login-input">
            <input type="text" name="login-input" />
            <button type="submit" disabled>Entrar</button>
          </label>
        </div>
      </div>
    );
  }
}

export default Login;
