import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Button from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('Button Component', () => {
  it('render', () => {
    const button = shallow(<Button />);
    expect(button.hasClass('lnt-btn')).toBeTruthy();
  });
});