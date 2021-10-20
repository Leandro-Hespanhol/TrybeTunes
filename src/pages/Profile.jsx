import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Profile extends Component {
  render() {
    const { name, nameHeaderLoaded } = this.props;
    return (
      <div data-testid="page-profile">
        <Header name={ name } nameHeaderLoaded={ nameHeaderLoaded } />
        <h1>Profile</h1>
      </div>
    );
  }
}

export default Profile;

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  nameHeaderLoaded: PropTypes.bool.isRequired,
};
