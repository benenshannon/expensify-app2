import React from 'react';
import {connect} from 'react-redux';
//connect connects to filters and expenses from the configureStore store
//it does this by the command "props.filters/expenses"
import {DateRangePicker} from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters';

export class ExpenseListFilters extends React.Component {
    //as this is now a class, whenever "props.filters/expenses" is called 
    //it needs to be preceeded by "this".props.filters/expenses
    //(as "this" refers to the props within the class)
    state = {
        calendarFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        //dispatch to the store the setStartDate action with startDate as 
        //selected
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() =>({ calendarFocused }));
    };

    onTextChange = (e) =>{
        //"e" is the event change
        //dispatch sends info to the store
        this.props.setTextFilter(e.target.value);
    };

    onSortChange = (e) => {
        if(e.target.value === 'date') {
            this.props.sortByDate();
        } else if (e.target.value === 'amount') {
             this.props.sortByAmount();
        }
    };

    render() {
        return (
            <div>
            <input 
            type="text" 
            value = {this.props.filters.text} 
                onChange={this.onTextChange}
                /> 
            <select
            //inside the <select> command is where we identify the 'value' item
            //this value is then called in the <option> code
            //props.filters (and props.expenses) - this is calling the export from
            //.reducers/filters.js, as props calls the original store (configureStore)
               value={this.props.filters.sortBy}
               onChange={this.onSortChange}      
               >
              <option value ="amount">Amount</option>
              <option value ="date">Date</option>
            </select>
            <DateRangePicker
            //startDate gets it's value off the filters object (this is the 
            //filters file in the reducers folder, imported into 
            //configureStore and then called using import {connect})
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              //on dates change doesnt exist anywhere (hence no this.props
              //so it gets created in the class, above)
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths = {1}
              isOutsideRange={() => false}
              showClearDates={true}
            />
            </div>
        );
    };
};

//mapStateToProps calls the state we want, and then is entered in the export
//default command
const mapStateToProps = (state) => ({filters: state.filters});


const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

//export connected version of ExpenseListFilters
//first brackets define what we want, second brackets define what we export
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);