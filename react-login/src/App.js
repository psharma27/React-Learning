import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './components/Login/Login.js';
import './App.css';

class App extends Component {

  doButton = () => {
    alert('Hi');
  };

  render() {
    const test = true;
    return (
      <div className="App">
        {test ? (
          <div>
            <header className="App-header">
              <img src={logo} onClick={this.doButton} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <Login />
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          </div>) : null}
      </div>
    );

  }
}

export default App;
