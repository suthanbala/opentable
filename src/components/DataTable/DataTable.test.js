import React from 'react';
import { DataTable } from './DataTable';
import { shallow } from 'enzyme';
import Immutable from 'immutable';

describe('DataTable', () => {
  let wrapper;
  const entries = Immutable.fromJS([
    {
      name: 'Scaramouche Restaurant',
      address: '1 Benvenuto Place',
      area: 'Toronto / SW Ontario',
      price: 4,
      image_url: 'https://www.opentable.com/img/restimages/112033.jpg'
    },
    {
      name: 'The Sultan\'s Tent',
      address: '49 Front St E',
      area: 'Toronto / SW Ontario',
      price: 4,
      image_url: 'https://www.opentable.com/img/restimages/112033.jpg'
    },
  ]);

  beforeEach(() => {
    wrapper = shallow(<DataTable city="Toronto" entries={entries} />)
  });

  it('renders DataTable', () => {
    expect(wrapper.find('div').length).toEqual(4);
  });

  it('should render the city name', () => {
    expect(wrapper.find("h2").text()).toEqual("Showing results for Toronto");
  })
})