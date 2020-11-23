import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense} />;
            })
            )
        }
    </div>
);

//mapping the state (redux store) to the props
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

//HOC
export default connect(mapStateToProps)(ExpenseList);

//This file is referenced in the components/ExpenseDashboard.js file