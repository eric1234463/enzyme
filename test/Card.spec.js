import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Card from '../src/Card';

describe('Card', () => {
  const rows = [
    {
      name: '123',
      status: 'active'
    },
    {
      name: '123',
      status: 'inactive'
    }
  ];

  it('should render correctly as snapshot', () => {
    const mockOnClick = jest.fn();
    Card.prototype.handleOnClick = mockOnClick;

    const wrapper = shallow(<Card rows={rows} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render 1 active div with class label', () => {
    const activeRows = [
      {
        name: '123',
        status: 'active'
      },
      {
        name: '123',
        status: 'active'
      }
    ];
    const wrapper = render(<Card rows={activeRows} />);

    expect(wrapper.find('div.label')).toHaveLength(2);
  });

  it('should render 0 active div with class label', () => {
    const activeRows = [
      {
        name: '123',
        status: 'inactive'
      },
      {
        name: '123',
        status: 'inactive'
      }
    ];
    const wrapper = render(<Card rows={activeRows} />);

    expect(wrapper.find('div.label')).toHaveLength(0);
  });

  it('should render done status tag', () => {
    const activeRows = [
      {
        name: '123',
        status: 'inactive'
      },
      {
        name: '123',
        status: 'inactive'
      }
    ];
    const wrapper = render(<Card rows={activeRows} tag={'DONE'} />);

    expect(wrapper.find('div.label')).toHaveLength(0);

    expect(wrapper.find('#status-tag')).toHaveLength(1);

    expect(wrapper.find('#status-tag').html()).toEqual('Done');

    expect(wrapper.find('#status-tag').hasClass('done-tag')).toEqual(true);
  });

  it('should contain null message', () => {
    const wrapper = mount(<Card rows={[]} />);

    expect(wrapper.contains(<div className='null-message'>Null</div>)).toEqual(true);

    expect(wrapper.find('.div.label').exists()).toEqual(false);

  });

  it('when ComponentDidMount should call addEventListener && unmount should call removeEventListener', () => {
    const adder = jest.spyOn(global, 'addEventListener').mockImplementation(() => {});

    const remover = jest.spyOn(global, 'removeEventListener').mockImplementation(() => {});
    const wrapper = mount(<Card rows={[]} />);
    
    expect(adder).toBeCalled();
    
    wrapper.unmount();
    
    expect(remover).toBeCalled();
  });

  it('when container click should change state isShow', () => {
    const wrapper = mount(<Card rows={[]} />);

    // Simulate OnClick Event
    wrapper.find('#container').simulate('click');

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.state().isShow).toEqual(true);
  })
});
