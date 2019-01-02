import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Card from '../src/Card';

describe('Card', () => {
  const rows = [
    {
      name: '123',
    },
    {
      name: '123',
    },
  ];

  it('should render correctly as snapshot', () => {
    const component = shallow(<Card rows={rows} />);

    expect(component).toMatchSnapshot();
  });

  it('should render 2 div with class label', () => {
    const wrapper = render(<Card rows={rows} />);

    expect(wrapper.find('div.label')).toHaveLength(2);
  });

  it('should contain null message', () => {
    const wrapper = mount(<Card rows={[]} />);

    expect(
      wrapper.contains(<div className="null-message">Null</div>),
    ).toEqual(true);
  });
});
