import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe("Header", () => {
  it("Renders 'View All Events' link", () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.text()).toEqual('View All Events')
  });

})