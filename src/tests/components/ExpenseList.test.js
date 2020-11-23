import React from 'react';
import { shallow } from 'enzyme';
import "../setupTests";
import { ExpenseList } from '../../components/ExpenseList';
//ExpenseList is in {} as it is a named export (as there is also
//a default export in the components/ExpenseList.js file)
import expenses from '../fixtures/expenses';

//Test the unconnected ExpenseList - so we dont want to get this from the   
//store (configstore)

test('should render expense list with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    //ExpenseList expects the expenses property, so that is what is added
    expect(wrapper).toMatchSnapshot();
});

test('should render expense list with empty message', () =>{
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    //ExpenseList expects the expenses property, so that is what is added
    expect(wrapper).toMatchSnapshot();
});