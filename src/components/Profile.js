import React from 'react';
import AuthService from '../services/auth.service';
import Navigation from './Navigation';

const Profile = () => {

  const currentUser = AuthService.getCurrentUser();

  return (
    <div>
      <Navigation />
      <h3>Username: {currentUser.username}</h3>
      <p>Email: {currentUser.email}</p>
      <p>ID: {currentUser.id}</p>
    </div>
  )
}

export default Profile;
