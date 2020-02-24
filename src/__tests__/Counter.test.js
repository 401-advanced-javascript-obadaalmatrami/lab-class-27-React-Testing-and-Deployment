import React from 'react';
import renderer from 'react-test-renderer';

import Counter from '../components/counter/counter.js';


describe('<counter />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Counter />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('decrement button works as expected', () => {
    const app = mount(<Counter />);
    const countSpan = app.find('.counter span');
    const decrementButton = app.find('.decrement');

    expect(app.state('count')).toEqual(0);
    expect(countSpan.text()).toEqual('0');

    decrementButton.simulate('click');
    expect(app.state('count')).toEqual(-1);
    expect(countSpan.text()).toEqual('-1');

    decrementButton.simulate('click');
    expect(app.state('count')).toEqual(-2);
    expect(countSpan.text()).toEqual('-2');

    app.unmount();
  });

  it('increment button works as expected', () => {
    const app = mount(<Counter />);
    const countSpan = app.find('.counter span');
    const incrementButton = app.find('.increment');

    expect(app.state('count')).toEqual(0);
    expect(countSpan.text()).toEqual('0');

    incrementButton.simulate('click');
    expect(app.state('count')).toEqual(1);
    expect(countSpan.text()).toEqual('1');

    incrementButton.simulate('click');
    expect(app.state('count')).toEqual(2);
    expect(countSpan.text()).toEqual('2');

    app.unmount();
  });
});