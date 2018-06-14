import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const welcome = "Herzlich willkommen zu React!"
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{welcome}</h1>
        </header>
        <p className="App-intro">
          Ein kleines Rechenbeispiel: 3 + 4 = {3 + 4}
        </p>
      </div>
    );
  }
}

export default App;
