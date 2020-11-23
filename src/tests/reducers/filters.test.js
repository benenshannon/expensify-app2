import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should set up default filter values', () => {
  const state = filtersReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual({
      text: '',
      sortBy: 'date',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
  });
});

test('should set up sortby to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
    });

test('should set up sortby to date', () => {
    //setting current state to amount to check that the sortby does change
    // to date from amount
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'          
        };
    const action = {type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
    });

//set text filter
    test('should set up text filter', () => {
        const text = 'this is my filter';
        const action = {
            type: 'SET_TEXT_FILTER',
            text
        };
        const state = filtersReducer(undefined, action);
        expect(state.text).toBe(text);
      });

//set startDate filter
test('should set startDate filter', () => {
    const startDate = moment(100);
    const action = {
        type: 'SET_START_DATE',
        startDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
  });

//set endDate filter
test('should set endDate filter', () => {
    const endDate = moment(0);
    const action = {
        type: 'SET_END_DATE',
        endDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
  });