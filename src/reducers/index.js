import {combineReducers} from 'redux';
import CurrentUserReducer from './CurrentUserReducer';
import WorkDayReducer from './WorkDayReducer';
import ProductsReducer from './ProductsReducer';
import AppointmentReducer from './AppointmentReducer'

const allReducers = combineReducers({
    CurrentUserReducer,
    WorkDayReducer,
    ProductsReducer,
    AppointmentReducer,
});

export default allReducers;