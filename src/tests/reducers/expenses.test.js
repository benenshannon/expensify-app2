import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set defulat state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
    //in the expenses reducer, the expensesReducerDefaultState is [],
    //so that is what we expect when no entries have been added
});

//REMOVE_EXPENSE
test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
    id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
    id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

//ADD_EXPENSE
test('should add expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense:{
            id: '100',
            description: 'new addition',
            note: 'adding a note too',
            amount: 999999,
        } 
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses,action.expense]);
});

//EDIT_EXPENSE
test('should edit expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {description: 'neeeeeeeeeeeeew'}
    }
    const state = expensesReducer(expenses, action);
    expect(state[1].description).toBe(action.updates.description);
});

//EDIT_EXPENSE shouldnt edit expense if doesnt exist
test('should not edit expense if id doesnt exist', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-11',
        updates: {description: 'neeeeeeeeeeeeew'}
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});