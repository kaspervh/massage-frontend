import { combineReducers, CombineReducers } from 'redux';
import CurrentUserReducer from './CurrentUserReducer';
import WorkDayReducer from './WorkDayReducer';

const allReducers = combineReducers({
    CurrentUserReducer,
    WorkDayReducer,
});

export default allReducers;