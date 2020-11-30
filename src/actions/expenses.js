import uuid from 'uuid';
import database from '../firebase/firebase';

//How the action generators work:
//component calls action generator
//action generator returns an object
//component dispatches the object
//redux store changes

//ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0 
        } = expenseData;
        const expense = {description, note, amount, createdAt};

        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

//REMOVE_EXPENSE
export const removeExpense = (
    { id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//startRemoveExpense
export const startRemoveExpense= ({ id } = {}) => {
    return (dispatch) => {
        //dispatch gets passed to this function by the redux library
        return database.ref(`expenses/${id}`).remove().then(() => {
            //once the item has been removed, the removeExpense action
            //generator is then called
            dispatch(removeExpense( { id }));
        });
    };
};

//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// manipulate the redux store
//SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

//THIS WILL ACTUALLY FETCH THE DATA
//export const startSetExpenses;
export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses = [];

            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setExpenses(expenses));
        });
    };
};