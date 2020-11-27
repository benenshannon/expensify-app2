import React from 'react';
import { connect } from 'react-redux';
//adding connect so that the expenseform can be submitted to the store
import ExpenseForm from './ExpenseForm';
//ExpenseForm is a class
import { startAddExpense } from '../actions/expenses';
//this imports addExpense from the actions folder with all the properties
//(description, amount, createdAt etc)

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };
  render() {
    return (
    <div>
    <h1>Add Expense</h1>
    <ExpenseForm 
      onSubmit={this.onSubmit}
      />
  </div>
);
  }
};


//CODE BELOW IS SUPERCEDED BY BY THE CODE STARTING ON ROW 10 ABOVE
//const AddExpensePage = (props) => (
//<div>
//  <h1>Add Expense</h1>
//  <ExpenseForm 
//    onSubmit={(expense) => {
   //onSubmit prop, gets called when form is properly submitted and calls the 
   //'expense' argument
//   props.onSubmit(expense);
//   props.history.push('/');
  //props.history.push uses queries that exist in URL/JSX language already
//    }}
//  />
//</div>
//As ExpenseForm is JSX already, it needs be called as <ExpenseForm />
//);

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);