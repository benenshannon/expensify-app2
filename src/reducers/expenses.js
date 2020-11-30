// Expenses Reducer
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState , action) => {
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
        case 'SET_EXPENSES':
        // returning the action object with the expense array attached
            return action.expenses;   
        default:
            return state;
    }
};