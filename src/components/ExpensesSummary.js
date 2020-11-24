import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

const ExpenseSummary = (props) => (
    //props can be destructured to just get expenseCount & expenseTotal
    //above
    <div>
        {
            props.expenses.length === 1 ? (
                <p>Viewing one expense totalling {numeral((props.expenses
                    .map((expense) => expense.amount)
                    .reduce((sum,value) => sum+value, 0)
                    ) / 100).format('$0,0.00')} </p>
            ) : 
            props.expenses.length > 1 ? (
            <p>Viewing {props.expenses.length} expenses totalling {numeral((props.expenses
                .map((expense) => expense.amount)
                .reduce((sum,value) => sum+value, 0)
                ) / 100).format('$0,0.00')}</p>
            ) : <p></p>
        }
    </div>
    );

export const ExpenseSummaryTest = ({ expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

    return (
        <div>
          <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal} </h1>
        </div>
    );
};



//mapping the state (redux store) to the props
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

//HOC
export default connect(mapStateToProps)(ExpenseSummary);

//(expenses
//    .map((expense) => expense.amount)
//    .reduce((sum,value) => sum+value, 0)
//)