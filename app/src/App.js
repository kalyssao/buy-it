import React from 'react';
import Search from './Search';
import './App.css';

function App() {
  return (
      <div className="App-page">
        <h2 id="title">
          Should You Buy that?
        </h2>
        <p id="subtitle">Let us be the judge of that.</p>
        <Search></Search>
      </div>
  );
}

export default App;
