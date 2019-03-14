import React from 'react';
import Entry from './Entry';
import { shallow } from 'enzyme';

describe('Entry', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Entry name="Scaramouche Restauran" address="1 Benvenuto Place" area="Toronto / SW Ontario" price={4} />)
  });

  it('renders Entry', () => {
    expect(wrapper.find('div').length).toEqual(4);
  });

  it('should render the store name', () => {
    expect(wrapper.find("h2").text()).toEqual("Scaramouche Restauran");
  })
})