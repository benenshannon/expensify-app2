//"yarn test -- --watch" is the cmd for all testing
import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';
import { NoEmitOnErrorsPlugin } from 'webpack';
import { TRUE } from 'node-sass';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>)
    //expense form has function expense that needs to be called
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission',() => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {preventDefault: () => {} });
    //looking for "form" element in the ExpenseForm component
    //simulate "submit" as the form has an onSubmit event
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    //state "error" exists in the ExpenseForm component, and if it is not
    // > 0 it means that the form wasnt submitted (the Default is an empty string)
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    //1) render ExpenseForm
    //2) change the input
    //3) make an assertion to see that state was set
 //1) render ExpenseForm:   
    const wrapper = shallow(<ExpenseForm />);
 //2) submit change event - first access the element 
   // creating new value event
 const value = 'New description';
   //find the inputs
   //.at = find the specific inputs inside the component, .at(0) is 
   //first input ("description", onDescriptionChange). 
   //.at is in enzyme documentation
        //simulate enables us to simulate events (such as 
        //'change, {target: {value}})
    wrapper.find('input').at(0).simulate('change', {
        //enter the object to change - "e" in onDescriptionChange
        //e = target.value
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change',() => {
    const wrapper = shallow(<ExpenseForm />);
    const value = 'New note';
    //note that forms have two entries - 'input' for numerical and
    //'textarea' for strings
    wrapper.find('textarea').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid input', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = '23.50';
    //update the find 'input' to be the second input in the form
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toEqual(value);
});

test('should not set amount if invalid input', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = '23.50.50';
    //update the find 'input' to be the second input in the form
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toEqual('');
});

//Test spies - these create fake functions by jest for us. They
//enable us to check if the fake function was called, how, with
//any specific arguments etc.
test('should call onSubmit prop for valid form submission', () => {
  //1) create the Spy
    const onSubmitSpy = jest.fn();
    //adding "expense" to <ExpenseForm /> allows us to render it with 
    //properties - in this case an expense from expenses array
    //Also call onSubmit, as that is part of the component, and so
    //needs to be defined
    const wrapper = shallow(<ExpenseForm expense={expenses[2]} 
        onSubmit= {onSubmitSpy}/>);
        //submitform
        wrapper.find('form').simulate('submit', {
            preventDefault: () => { } 
        }); 
  //2) add assertions 
       expect(wrapper.state('error')).toBe('');
       expect(onSubmitSpy).toHaveBeenLastCalledWith({
           description: expenses[2].description,
           amount: expenses[2].amount,
           note: expenses[2].note,
           createdAt: expenses[2].createdAt
       });
    //Simple example - 
    //onSubmitSpy('Ben','Windsor');
    //expect(onSubmitSpy).toHaveBeenCalledWith('Ben,','Windsor');
});

test('should set new date on date change', () => {
    const wrapper = shallow(<ExpenseForm />) 
    const now = moment();
    //enzyme 'prop' command lets us read a prop off child components
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});


test('should set calendarFocused to true', () => {
    const wrapper = shallow(<ExpenseForm />) 
    const focused = true;
    //as the onFocusChange expects an object, it has to be in curley
    //braces ("{focused}") in the line below, whereas on date change
    //expects a standard component
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toBe(focused);
});