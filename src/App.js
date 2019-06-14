import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <header id="titlebar">
        <div id="drag-region">

          <div id="window-title">
            <span>Wilma v 2.0</span>
          </div>

          <div id="window-controls">
            <div class="button" id="min-button">
              <span>&#xE921;</span>
            </div>
            <div class="button" id="max-button">
              <span>&#xE922;</span>
            </div>
            <div class="button" id="restore-button">
              <span>&#xE923;</span>
            </div>
            <div class="button" id="close-button">
              <span>&#xE8BB;</span>
            </div>

          </div>
        </div>
      </header> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
    </div>
  );
}

export default App;
