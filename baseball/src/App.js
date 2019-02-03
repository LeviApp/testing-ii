import React, { Component } from 'react';
import './App.css';
import Display from './Display';

import Dashboard from './Dashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        strike: 0,
        ball: 0,
        foul: 0,
        hit: 0,
    }



}


countUP = (event) => {
  event.preventDefault();
  const value = event.target.value;
  
  if (this.state.strike<3 || this.state.ball<4)
  {this.setState({[value]: this.state[value] + 1 })}

  if (this.state.strike>=2 && value !== 'foul' && value !== 'ball' || this.state.ball>=3 && value !== 'foul' && value !== 'strike') {
    this.setState({strike:0, ball:0, foul:0,})

  }

  if (value === 'hit') {
    this.setState({strike:0, ball:0, foul:0})
  }
  console.log(value)
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
