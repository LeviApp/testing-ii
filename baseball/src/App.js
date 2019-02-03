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


countUP = (event) => {
  event.preventDefault();
  const value = event.target.value;
  this.setState({[value]: this.state[value] + 1 })
}
  render() {
    return (
      <div className="App">
        <Display strike={this.state.strike} ball={this.state.ball} foul={this.state.foul} hit={this.state.hit}/>
        <Dashboard counting={this.countUP}/>

      </div>
    );
  }
}

export default App;
