import { addExpense, editExpense, removeExpense  } from '../../actions/expenses';

//remove expense
test('should setup remove expense action object', () => {
    //remove expense has one object  - id - so that needs to be defined 
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        //the toBe outlines what we would expect from the removeExpense const
        //in the actions/expenses.js file
        //WE USED THE toEqual command here as this will compare objects/arrays
        //whereas toBe only compares strings/booleans/numbers
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
}); 

//edit expense
test('should setup the edit expense action object', () => {
    //remove expense has one object  - id - so that needs to be defined 
    const edit = editExpense('123abc',{note: 'wahhh', amount: 1000});
    // two objects need to get passed into "editExpenses, "id" and "updates"
        //"updates" is an object with multiple components, hence curley braces
        //to split out the component parts (nested objects)
    expect(edit).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {note: 'wahhh',
        amount: 1000}
    });
}); 

//add expense
test('should setup add expense action object with provided values', () => {
    const expenseData = { 
        description: 'Rent', 
        note: 'this is an early rent payment', 
        amount: 233300, 
        createdAt: 10000000000
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
         }
    });

}); 

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense: {description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0,
            id: expect.any(String)
         }
    });
}); 