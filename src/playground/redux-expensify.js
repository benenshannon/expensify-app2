import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
const addExpense = (
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0 
    } 
    = {}) => ({
    type: 'ADD_EXPENSE',
    expense:{
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})
//REMOVE_EXPENSE
const removeExpense = (
    { id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
//EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
//SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});
//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});
//SET_START_DATE
const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});

//SET_END_DATE
const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});


// Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState , action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            //.filter is a way of searching an array for
            //objects that meet a criteria - such as !== action.id
            // and returning the new filtered array 
            return state.filter(( { id }) => id !== action.id);
            //return state.filter(( { id }) => {return id !== action.id});
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id===action.id){
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                };
            });
        default:
            return state;
    }
};


//Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', //date or amount
    startDate: undefined,
    endDate: undefined};

const filtersReducer = (state = filtersReducerDefaultState , action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {...state,
            text: action.text
        };
        case 'SORT_BY_AMOUNT':
            return {...state,
            sortBy: 'amount'
        };
        case 'SORT_BY_DATE':
            return {...state,
            sortBy: 'date'
        };
        case 'SET_START_DATE':
            return {...state,
            startDate: action.startDate
        };
        case 'SET_END_DATE':
            return {...state,
            endDate: action.endDate
        };
        default:
            return state;
    }
};

//timestamps are any integers, stored in milliseconds from 1/1/1970 unix epoch

//Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate }) => {
//arrow function calling "expenses" array, and filters (destructured by using {})
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        //"typeof startDate !== 'number'" will return true, so not to exclude missing date data
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
            //if a is less than than b, then true = 1, meaning b will come first
        }
        else if(sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

//Store creation

//"filtersReducer" manages the "filters" reducer
//combine reducers lets us use multiple reducers (for complex stores)
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    //getting the relevant return values from getvisibleexpenses, and then 
    //passing in the relevant data from expenses & filters
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount : 20000, createdAt: -200 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Wine', amount : 2199, createdAt: 1000 }));

//store.dispatch(removeExpense({id: expenseOne.expense.id}))
//store.dispatch(editExpense(expenseTwo.expense.id, {amount: 69 }));
//store.dispatch(setTextFilter('N'));
//store.dispatch(setTextFilter(''));
store.dispatch(sortByAmount());
//store.dispatch(sortByDate());
//store.dispatch(setStartDate(-125));
//store.dispatch(setEndDate(250));



const demoState = {
    expenses:[{
        id: 'sdgasg',
        description: 'January rent',
        note: 'This was the last payment ever',
        amount: 170000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

const user = {
    name: 'Ben',
    age: 34
};

console.log({
    name: "rich",
    ...user,
    location: 'Windsor',
    age: 21,
    name: "Richard"
});