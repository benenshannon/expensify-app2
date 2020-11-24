import React from 'react';
import { shallow } from 'enzyme';
import ExpenseSummary from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render expense summary with expenses', () => {
    const wrapper = shallow(<ExpenseSummary />);
    //ExpenseList expects the expenses property, so that is what is added
    expect(wrapper).toMatchSnapshot();
});