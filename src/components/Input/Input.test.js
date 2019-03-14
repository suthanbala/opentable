import React from 'react';
import Input from './Input';
import { shallow } from 'enzyme';

describe('Input', () => {
  let wrapper;
  const onChange = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Input onChange={onChange} />)
  });

  it('renders Input', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });

  it('should render the given value', () => {
    wrapper = shallow(<Input value="Toronto" onChange={onChange} />);
    expect(wrapper.find('input').props().value).toEqual('Toronto');
  });

  it('should update values on onChange', () => {
    wrapper = shallow(<Input value="Toronto" onChange={onChange} />);
    expect(wrapper.find('input').props().value).toEqual('Toronto');
    const newValue = {
      target: {
        name: 'name',
        value: 'Montreal'
      }
    };
    wrapper.find('input').simulate('change', newValue);
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith(newValue);
  });
})