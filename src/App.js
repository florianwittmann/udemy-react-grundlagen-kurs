import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Rechnung from './Rechnung'

class App extends Component {
  render() {
    const welcome = "Herzlich willkommen zu React!"
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{welcome}</h1>
        </header>
        <Rechnung zahlA={15} zahlB={27} />
      </div>
    );
  }
}

export default App;
