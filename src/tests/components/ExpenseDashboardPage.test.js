import React from 'react';
import { shallow } from 'enzyme';
import "../setupTests";
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

test('Should render expense dashboard correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});