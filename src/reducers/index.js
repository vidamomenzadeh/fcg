import { combineReducers } from 'redux';
import car from './car';
import task from './task';


const rootReducer = combineReducers({
    car,
    task
});

export default rootReducer;