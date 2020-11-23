import React from 'react';
import { shallow } from 'enzyme';
import "../setupTests";
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';
 
test('should render expense list item with expenses', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
    //ExpenseListItem expects several props - id, desc, amount, createdAt
    //so using the "..." spreads out the expenses object, and adds each one
    //as a prop to ExpenseListItem
    expect(wrapper).toMatchSnapshot();
});
