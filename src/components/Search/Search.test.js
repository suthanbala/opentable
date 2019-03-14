import React from 'react';
import { Search } from './Search';
import { shallow } from 'enzyme';

describe('Search', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search />)
  });

  it('renders', () => {
    expect(wrapper.find('div').length).toEqual(6);
  });
})