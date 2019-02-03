import React, { Component } from 'react';
import './App.css';
import Display from './Display';

import Dashboard from './Dashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        strike: 0,
        ball: 2,
        foul: 3,
        hit: 0,
    }



}
  render() {
    return (
      <div className="App">
        <Display strike={this.state.strike} ball={this.state.ball} foul={this.state.foul} hit={this.state.hit}/>
        <Dashboard />

      </div>
    );
  }
}

export default App;
