import { combineReducers } from 'redux';

import counter from './dashboard/reducer';
import isLoggedIn from './settings/reducer';

// each reducer is a piece of state

const reducers = combineReducers({
    counter,
    isLoggedIn
});

export default reducers;