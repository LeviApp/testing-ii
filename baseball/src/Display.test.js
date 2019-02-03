import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Display from './Display';


describe('The Dashboard Component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


})