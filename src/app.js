//import validator from 'validator';

//console.log(validator.isEmail('test@google.com'));
import React from'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// "Provider" enables us to access the Store to all the components of our app
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';


const store = configureStore(); 
//store.dispatch - sends info to the store

//CREATING DUMMY EXPENSES TO PRE-POPULATE APP 
//store.dispatch(addExpense({ 
//    description: 'Water bill', 
//    amount : 4500, 
//    createdAt: 100000000 })); 

//store.dispatch(addExpense({ 
//    description: 'Gas bill', 
//    amount : 10000, 
//    createdAt: 150000 }));

//store.dispatch(addExpense({ 
//    description: 'rent', 
//    amount : 250000, 
//    createdAt: 200 }));

//store.dispatch(setTextFilter('water'));
//setTimeout(() => {store.dispatch(setTextFilter('bill'));}, 3000)

//console.log(store.getState());

//const state = store.getState();
//const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//console.log(visibleExpenses);

//Provider store = the configureStore const above
//Provider store = {store} provides us with the store we access
//using "Connect" and "MapStateToProps"
const jsx = (
    <Provider store = {store}>
      <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));

