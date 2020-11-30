import { 
    startAddExpense, 
    editExpense, 
    removeExpense, 
    setExpenses, 
    startSetExpenses,
    startRemoveExpense  } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

// const createMockStore = configureMockStore([thunk]);

// beforeEach((done) => {
//     const expensesData = {};
//     expenses.forEach(({ id, description, note, amount, createdAt }) => {
//         expenses[id] = { description, note, amount, createdAt };
//     });
//     database.ref('expenses').set(expensesData).then(() => done());
// });

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

// test('should remove expense from firebase', (done) => {
//     const store = createMockStore({});
//     const id = expenses[2].id
//     store.dispatch(startRemoveExpense({ id })).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'REMOVE_EXPENSE',
//             id
//         });
//         return database.ref(`expenses/${id}`).once('value');
//     }).then((snapshot) => {
//         expect(snapshot.val()).toBeFalsy();
//         done();
//     });
// });

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
test('will setup add expense action object with provided values', () => {
    const action = addExpense(expenses[0]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[0]
    });

}); 

// test('should add expense to database and store', (done) => {
//     const store = createMockStore({});
//     const expenseData = {
//         description: 'Mouse',
//         amount: 3000,
//         note: 'this one is with a ball',
//         createdAt: 10000
//     };

//     store.dispatch(startAddExpense(expenseData)).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'ADD_EXPENSE',
//             expense: {
//                 id: expect.any(String),
//                 ...expenseData
//             }
//         });

// return database.ref(`expenses/${actions[0].expense.id}`).once('value');
//     })
//     .then((snapshot) => {
//         expect(snapshot.val()).toEqual(expenseData);
//         done();
//     });
// });


// test('should add expense with defaults to database and store', (done) => {
//     const store = createMockStore({});
//     const expenseDefaults = {
//         description: '',
//         amount: 0,
//         note: '',
//         createdAt: 0
//     };

//     store.dispatch(startAddExpense({})).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'ADD_EXPENSE',
//             expense: {
//                 id: expect.any(String),
//                 ...expenseDefaults
//             }
//         });

// return database.ref(`expenses/${actions[0].expense.id}`).once('value');
//     })
//     .then((snapshot) => {
//         expect(snapshot.val()).toEqual(expenseDefaults);
//         done();
//     });
// });


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

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

// test('should fetch the expenses from firebase', (done) => {
//     const store = createMockStore({});
//     store.dispatch(startSetExpenses()).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'SET_EXPENSES',
//             expenses
//         });
//         (done);
//     });
// });