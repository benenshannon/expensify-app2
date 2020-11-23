import moment from 'moment';

export default [{
    id: '1',
    description: 'rent',
    note: 'this was the old rent',
    amount: 189500,
    createdAt: 0
},  {
    id: '2',
    description: 'mortgage',
    note: 'this was the first mortgage',
    amount: 230000,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},  {
    id: '3',
    description: 'new mortgage',
    note: 'this was the new mortgage payment',
    amount: 250000,
    createdAt: moment(0).add(4, 'days').valueOf()
}];