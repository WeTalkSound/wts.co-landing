import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          WeTalkSound
        </h3>
        <p>
          Nigeria's biggest music community.
        </p>
        <a
          className="App-link"
          href="https://t.me/wetalksound"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join The Community
        </a>
      </header>
    </div>
  );
}

export default App;
