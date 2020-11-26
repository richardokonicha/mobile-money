import counter from './counter';
import isLoggedIn from './isLoggedIn';
import { combineReducers } from 'redux';

// each reducer is a piece of state

const reducers = combineReducers({
    counter,
    isLoggedIn
});

export default reducers;