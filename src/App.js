import React from "react";

import { LoginButton } from './Login';
import { Profile } from './Profile';
import { LogoutButton } from './Logout';
import logo from "./logo.svg"
// styles
import "./App.css";



function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-Logo" alt="logo" />
        <LoginButton />
        <Profile/>
        <LogoutButton />
      </header>

    </div>
  )
}

export default App;
