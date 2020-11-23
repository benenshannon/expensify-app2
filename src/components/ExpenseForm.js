import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
//use the faq on https://github.com/airbnb/react-dates to help understand
//what is needed to use SingleDatePicker

// using date elements example: console.log(new Date().getFullYear()+1);
//moment is the standard approach, easier than date
const now = moment();
console.log(now.format('MMM Do, YYYY',));

export default class ExpenseFrom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {   
         //"state" sets the current state    
         description: props.expense ? props.expense.description : '',
         note: props.expense ? props.expense.note : '',
         amount: props.expense ? (props.expense.amount / 100).toString() : '',
         createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
         calendarFocused: false,
         error: ''
        };
    }

//onDescriptionChange is the arrow function that creates a 
//const (description) getting the value from e.target.value (e = event)
//this.setState is calling the description value set in the 
//const description code immediately above
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
        this.setState(() => ({amount}));
        }
    };

    onDateChange = (createdAt) => {
        if (createdAt) {
        this.setState(() => ( { createdAt }));
        }
        //this prevents the user from deleting the date from the input field
    };

    onFocusChange = ( { focused }) => {
        this.setState(() => ({ calendarFocused: focused}));
    };

    onSubmit = (e) => {
        //this prevents a full page refresh
        e.preventDefault();
        //'if' will check if there is no info in description or amount
        if (!this.state.description || !this.state.amount) {
            //set the updater function
            this.setState(() => ({ 
                error: 'Please provide description and amount'})); 
        } else {
            this.setState(() => ({error: ''}));
        this.props.onSubmit({
            //this is creating the properties of the onSubmit object
            //to be imported into the AddExpensePage
            description: this.state.description,
            amount: parseFloat(this.state.amount, 10) * 100,
            createdAt: this.state.createdAt.valueOf(),
            note: this.state.note
        });
        }
    };

    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit= {this.onSubmit} >
              <input 
                type = "text"
                placeholder = "Description"
                autoFocus 
                value = {this.state.description}
                //this.state calls the above state (current state)
                onChange={this.onDescriptionChange}
                />    
              <input
                type = "text"
                placeholder = "Amount"
                value = {this.state.amount} 
                onChange = {this.onAmountChange}/>
              <SingleDatePicker
                date={this.state.createdAt}
                onDateChange={this.onDateChange}
                focused={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => false}
            //numberOfMonths etc is in the online documentation in react-dates
              />
              <textarea
                placeholder = "Add a note for your expense (optional)"
                value = {this.state.note}
                onChange={this.onNoteChange}>
                </textarea>
              <button>
                Add expense
              </button>
            </form>
            </div>
        )
    };
};

//Use local component state to track the changes & only dispatch data to store
//when the button is clicked

