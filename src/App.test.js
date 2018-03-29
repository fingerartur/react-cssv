import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import expect from 'expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() })

import App from './App';

describe('App component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('has name field', () => {
    const app = shallow(<App/>);
    const input = app.find('input[type="text"]');
    expect(input).toBeTruthy();
  });
  
  it('has password field', () => {
    const app = shallow(<App/>);
    const input = app.find('input[type="password"]');
    expect(input).toBeTruthy(); //CARE expect library deprecated toExist in favour of toBeTruthy
  });
  
  it('has a login button', () => {
    const app = shallow(<App/>);
    expect(app.find('button').text()).toBe('Log in');
  });
});
