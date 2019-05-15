import { combineReducers } from 'redux';
import {CAR} from "@actions";

let initialState = {
    listMarkers  : {}
}


export const byId = (state = initialState.listMarkers, action)=> {
    switch (action.type) {
        case CAR.FETCHITEM.SUCCESS:

            return {
                ...state,
                ...action.payload.data.reduce((obj, pop) => {
                    return obj;
                }, {})
            }

        default:
                return state;
    }
};

export const getCarById  = (state) => {
    return  state ? state.car.byId : {};
};


export default combineReducers({
    byId
});
