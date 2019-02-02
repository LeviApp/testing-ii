import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display.js';
import {render} from '../../node_modules/react-testing-library'

describe('The Display Component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('displays button text', () => {
      const component = render(<Display />)

      const STRIKE = component.getByText('strike');
  });

})