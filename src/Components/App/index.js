import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Aside from '../Aside';
import Portfolio from '../Portfolio';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Aside/>
        <Switch>
        <Route exact path='/portfolio' render={() => {
            return <Portfolio />
          }} />
        </Switch>
      </div>
    );
  }
}

export default App;
