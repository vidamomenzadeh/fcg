import { combineReducers } from 'redux';
import {CAR} from "@actions";

export const byId = (state = {}, action)=> {
    switch (action.type) {
        case CAR.FETCHITEM.SUCCESS:
            return {
                ...state,
                ...action.payload
            }

        default:
                return state;
    }
};

export const trims = (state = [], action)=> {
    switch (action.type) {
        case CAR.FETCHTRIM.SUCCESS:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
};

export const models = (state = [], action)=> {
    switch (action.type) {
        case CAR.FETCHMODEL.SUCCESS:

            return [
                ...state,
                ...action.payload
            ]

        default:
            return state;
    }
};

export const getCarById  = (state) => {
    return  state ? state.car.byId : {};
};

export default combineReducers({
    byId,
    trims,
    models
});
