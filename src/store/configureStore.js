import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || 
  compose;


export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
            //"filtersReducer" manages the "filters" reducer
            //a "reducer" is the action that defines what info from the 
            // store we call
            //combine reducers lets us use multiple 
            //reducers (for complex stores)
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
     //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};

//Store creation


 