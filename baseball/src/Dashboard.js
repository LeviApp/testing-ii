import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
      
      <button value='strike' onClick={this.props.counting}>strike</button>
      <button value='ball' onClick={this.props.counting}>ball</button>
      <button value='foul' onClick={this.props.counting}>foul</button>
      <button value='hit' onClick={this.props.counting}>hit</button>



      </div>
    );
  }
}

export default Dashboard;