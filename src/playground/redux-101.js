import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
    //becuase the function sets incrementBy to  1 if missing, 
    // we dont need the full code
    //incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({setAs = 1} = {}) => ({
    type: 'SET',
    setAs
});

const resetCount = () => ({
    type: 'RESET'
});

//Reducers
// 1. Reducers are pure functions - output only determined by input
// 2. Never change state or action

const countReducer = (state = {count: 0}, action) => {
    //"action" will call any of the objects in the dispatch - e.g action.type
        switch (action.type) {
            case 'INCREMENT':
                return {
                    count: state.count + action.incrementBy
                };
            case 'DECREMENT':
                return {
                    count: state.count - action.decrementBy
                };
            case 'SET':
                return {
                    count: action.setAs
                };
            case 'RESET':
                return {
                    count: 0
                };
            default:
                return state;
        }
    };

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    //subscribe will trigger every time the store changes
    console.log(store.getState());
});

//increment count

//store.dispatch({
    //dispatch will send an object to the store
    //can have lots of actions within the dispatch, 
    //and reference them in the store
   // type: 'INCREMENT',
    //incrementBy: 5
//});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 5
});

store.dispatch({
    type: 'RESET'
});

store.dispatch(setCount({ setAs: 1111 }));