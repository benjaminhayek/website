import React, { Component } from 'react';
import Aside from '../Aside';
import Portfolio from '../Portfolio';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Aside/>
        <Portfolio />
      </div>
    );
  }
}

export default App;
