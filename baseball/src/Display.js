import React, { Component } from 'react';

class Display extends Component {
    constructor() {
        super();
        this.state = {
           
        }



    }
  render() {
    return (
      <div className="Display">
        
      <h1>{this.props.strike}</h1>
      <h1>{this.props.ball}</h1>
      <h1>{this.props.foul}</h1>
      <h1>{this.props.hit}</h1>

      </div>
    );
  }
}

export default Display;
