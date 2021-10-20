import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class ProfileEdit extends Component {
  render() {
    const { name, nameHeaderLoaded } = this.props;
    return (
      <div data-testid="page-profile-edit">
        <Header name={ name } nameHeaderLoaded={ nameHeaderLoaded } />
        <h1>ProfileEdit</h1>
      </div>
    );
  }
}

export default ProfileEdit;

ProfileEdit.propTypes = {
  name: PropTypes.string.isRequired,
  nameHeaderLoaded: PropTypes.bool.isRequired,
};
