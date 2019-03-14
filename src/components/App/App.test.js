import React from 'react';
import { shallow } from 'enzyme';

import App from './App';


describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders App', () => {
    expect(wrapper.find('div').length).toEqual(4);
  })
})