import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

const ExpenseSummary = (props) => (
    //props can be destructured to just get expenseCount & expenseTotal
    //above
    <div className="page-header">
      <div className="content-container">
        {
            props.expenses.length === 1 ? (
                <p className="page-header__title">Viewing <span>one</span> expense totalling <span>{numeral((props.expenses
                    .map((expense) => expense.amount)
                    .reduce((sum,value) => sum+value, 0)
                    ) / 100).format('$0,0.00')}</span> </p>
            ) : 
            props.expenses.length > 1 ? (
            <p className="page-header__title">Viewing <span>{props.expenses.length}</span> expenses totalling <span>{numeral((props.expenses
                .map((expense) => expense.amount)
                .reduce((sum,value) => sum+value, 0)
                ) / 100).format('$0,0.00')}</span></p>
            ) : <p></p>
        }
          <div className="page-header__actions">
          <Link className="button" to="/create">Add expense</Link> 
          </div>
        </div>
    </div>
    );

// // this is how Udemy created the code
// export const ExpenseSummaryTest = ({ expenseCount, expensesTotal}) => {
//     const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
//     const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

//     return (
//         <div>
//           <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal} </h1>
//         </div>
//     );
// };



//mapping the state (redux store) to the props
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

//HOC
export default connect(mapStateToProps)(ExpenseSummary);
//we are creating a new component by connecting ExpensesSummary
//and getting values from mapStateToProps (stae)

//(expenses
//    .map((expense) => expense.amount)
//    .reduce((sum,value) => sum+value, 0)
//)