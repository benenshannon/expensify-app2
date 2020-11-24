export default (expenses) => {
    if (expenses.length ===0) {
        return 0;
    } else {
        //use map to turn array of objects into array of numbers
        return expenses
        .map((expense) => expense.amount)
        .reduce((sum,value) => sum+value, 0);
        }
    };


// it does also work with the below, as if the expense array is empty,
// it will return 0. The above is just clearer for testing purposes
//export default (expenses) => {
//        return expenses
//        .map((expense) => expense.amount)
//        .reduce((sum,value) => sum+value, 0);
//    };