import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="/1-candies"
          rel="noopener noreferrer"
        >
          1. Candies
        </a>
        <br/>
        <a
          className="App-link"
          href="/2-rectangles"
          rel="noopener noreferrer"
        >
          2. Rectangles
        </a>
        <br/>
        <a
          className="App-link"
          href="/3-timers"
          rel="noopener noreferrer"
        >
          3. Timers
        </a>
      </header>
    </div>
  );
}

export default App;
