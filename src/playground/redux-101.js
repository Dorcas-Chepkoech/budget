import { createStore} from 'redux';
//Action Creators - functions that return objects/actions
const incrementCount = ( payload = {}) => {
    return{
        type: 'INCREMENT',
        incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy:1
    };
};
const decrementCount = ( payload = {}) => {
    return{
        type: 'DECREMENT',
        decrementBy: typeof payload.decrementBy === 'number' ? payload.decrementBy:1
    };
};

const setCount = (payload) => {
    return {
        type: 'SET',
        count: payload.count
    };
};

const resetCount = () => {
    return {
        type: 'RESET'
    }
};

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            //const increment = typeof action.incrementBy === 'number' ? action.incrementBy :1
            return{
                count: state.count + action.incrementBy
            }
            
        case 'DECREMENT':
                // const decrement = typeof action.decrementBy === 'number' ? action.decrementBy :1
                return{
                    count: state.count - action.decrementBy
                };
                case 'RESET':
                return{
                    count: 0
                };
                case 'SET':
                    return {
                        count: action.count
                    };
            
            default:
                return state;
    }
};
//Reducers are pure functions

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});
//Actions- an object that gets sent to the store

//Increment Count
store.dispatch(incrementCount({ incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({count: 101}));