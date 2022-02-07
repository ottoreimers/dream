import React from 'react';
import AuthService from '../services/auth.service';

const Home = () => {

  const currentUser = AuthService.getCurrentUser();
  return (
    <div>
      <header>
        {currentUser ? (
          <>
          <h1>Welcome {currentUser.username}!</h1>
          </>
        ) : (
          <>
          <h1>Welcome, please log in</h1>
          </>
        )}
      </header>
    </div>
  )
}

export default Home;
