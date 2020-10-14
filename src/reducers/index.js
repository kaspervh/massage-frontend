import { combineReducers, CombineReducers } from 'redux';
import CurrentUserReducer from './CurrentUserReducer';
import WorkDayReducer from './WorkDayReducer';
import ProductsReducer from './ProductsReducer';

const allReducers = combineReducers({
    CurrentUserReducer,
    WorkDayReducer,
    ProductsReducer,
});

export default allReducers;