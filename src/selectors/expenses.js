import moment from 'moment';

//Get visible expenses
export default (expenses, {text, sortBy, startDate, endDate }) => {
    //arrow function calling "expenses" array, and 
    //"filters" (destructured by using {})
        return expenses.filter((expense) => {
            const createdAtMoment = moment(expense.createdAt)
            const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true ;
           const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true ;
            const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
            return startDateMatch && endDateMatch && textMatch;
        }).sort((a, b) => {
            if(sortBy === 'date') {
                return a.createdAt < b.createdAt ? 1 : -1;
                //if a is less than than b, then true = 1, meaning b will come first
            }
            else if(sortBy === 'amount') {
                return a.amount < b.amount ? 1 : -1;
            }
        });
    }; 
    