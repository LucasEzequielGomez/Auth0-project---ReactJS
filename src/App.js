import React from "react";

import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

// styles
import "./App.css";

import { useAuth0 } from '@auth0/auth0-react';



function App () {

  const {isAuthenticated} = useAuth0()

  return (
    <div className="App">
      <header className="App-header">
        
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        <Profile/>
      </header>
    </div>
  )
}

export default App;
