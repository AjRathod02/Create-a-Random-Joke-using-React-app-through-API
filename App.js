import logo from './logo.svg';
import './App.css';
import React, { Component} from'react';
import Joker from './components/Joker';

function App() {
  return (
    <div className="App">
       <h1>Joke Generator Using React and Joke API</h1>
            <Joker/>
    </div>
  );
}

export default App;
