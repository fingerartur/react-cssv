import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import expect from 'expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() })

import { Thumb } from './Thumb';
import src from '../ancona.png';

describe('Thumb component', () => {

  it('renders without crashing', () => {
    shallow(<Thumb/>);
  });
  
  it('has class Thumb-img', () => {
    expect(
      shallow(<Thumb src={src} title='ancona'/>).hasClass('Thumb-img')
    ).toBeTruthy();
  });

  it('has correct title', () => {
    expect(shallow(<Thumb src={src} title='ancona'/>).props()['title']).toEqual('ancona');
  });

});
