import logo from './logo.svg';
import './App.css';
import React from 'react';

const api = {
  key: "e50f480a3db99ee7cf9505826a51a31a",
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="App">
      <main>
        <div className='search-box'>
          <input type ='text'
          className='search-bar'
          placeholder='search...'
          />
        </div>
      </main>
      
    </div>
  );
}

export default App;
