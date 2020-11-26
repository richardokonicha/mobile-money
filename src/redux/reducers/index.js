import Counter from './Counter';
import isLoggedIn from './isLoggedIn';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    count: combineReducers,
    isLoggedIn: isLoggedIn
});

export default reducers;