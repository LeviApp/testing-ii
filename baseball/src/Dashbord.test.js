import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Dashboard from './Dashboard';
import {render} from 'react-testing-library'
import './App.css';


describe('The Dashboard Component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dashboard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('buttons display correct text', () => {
    const component = render(<Dashboard />);

    const STRIKE = component.getByText('strike');
    const BALL = component.getByText('ball');
    const FOUL = component.getByText('foul');
    const HIT = component.getByText('hit');
    
    expect(STRIKE.innerHTML).toBe('strike');
    expect(BALL.innerHTML).toBe('ball');
    expect(FOUL.innerHTML).toBe('foul');
    expect(HIT.innerHTML).toBe('hit');


  });


})