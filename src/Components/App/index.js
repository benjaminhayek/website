import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../About';
import Aside from '../Aside';
import Portfolio from '../Portfolio';
import Resume from '../Resume';
import Contact from '../Contact';
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
          <Route exact path='/about' render={() => {
              return <About />
            }} />
          <Route exact path='/resume' render={() => {
              return <Resume />
            }} />
          <Route exact path='/contact' render={() => {
              return <Contact />
            }} />
        </Switch>
      </div>
    );
  }
}

export default App;
