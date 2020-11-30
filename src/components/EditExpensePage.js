import React from 'react';
import  { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <ExpenseForm 
         expense={this.props.expense}
         onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    )
  }
};


//const EditExpensePage = (props) => {
//  return  (
//    <div>
//      <ExpenseForm 
      //this returns the ExpenseForm js
//      expense={props.expense}
//      onSubmit = {(expense) => {
        //dispatch the action to edit expense
        // redirect to the dashboard page
//        props.dispatch(editExpense(props.expense.id, expense));
        //editExpense has two arguments - id and updates, so get
        //id from the existing props.expense, and then the other updates 
        //from existing 'expense' folder
//        props.history.push('/');
//      }}
//      />
//      <button onClick={(e) => {
//        props.dispatch(removeExpense({id: props.expense.id}));
//        props.history.push('/');
//      }} >Remove</button>
//    </div>
//  );
//};

const mapStateToProps = (state, props) => ({
  //take some of the props from the HOC (higher order component, which is State)
    expense: state.expenses.find((expense) =>
      expense.id === props.match.params.id)
    });
    //.find lets us find exact matches within an array

const mapDispatchToProps = (dispatch, props) => ({
   editExpense: (id, expense) => dispatch(editExpense(id, expense)),
   startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);