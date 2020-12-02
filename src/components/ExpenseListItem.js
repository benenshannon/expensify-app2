import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

//removeExpense already has the function built in


const ExpenseListItem = ({id, description, amount, createdAt}) => (
      <Link className="list-item" to={`/edit/${id}`}>
      <div>
        <h3 className="list-item__title">{description}</h3> 
          <span className="list-item__sub-title">{moment(createdAt).format('Do MMM, YYYY')}</span>
      </div>
         <h3 className="list-item__data">{numeral(amount / 100 ).format('$0,0.00')}</h3> 
      </Link>
    //remember, when calling a function (removeExpense) to pass in the relevant
    // argument - see the removeExpense code in actions/expenses.js, where
    //id is required item
);

//always include "connect()" as this connects to the connected component
export default ExpenseListItem;

//This is the longer way of doing it
//const ExpenseListItem = (props) => (
//    <div>
//      {props.expenses.map((expense) => 
//        <li key = {expense.id}>
//        <h3 >Description: {expense.description}</h3>
//        <p>Amount: {expense.amount}</p>
//        <p>CreatedAt: {expense.createdAt}</p>
//        </li>)};
//    </div>
//);

//mapping the state (redux store) to the props (in longer format than the 
//one in the "ExpenseList.js" file)
//in the connect() brackets we define a function
//that identifies the info we want to call
//const ConnectedExpenseListItem = connect((state) => {
//    return {
//        expenses: state.expenses
//    };
//})(ExpenseListItem);

//export default ConnectedExpenseListItem;