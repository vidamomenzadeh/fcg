import { combineReducers } from 'redux';
import {CAR, TASK} from "@actions";

let initialState = {
    listMarkers  : {}
}


export const byId = (state = initialState.listMarkers, action)=> {
    switch (action.type) {
        case TASK.FETCHLIST.SUCCESS:

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

export const getTasksById  = (state) => {
    return  state ? state.task.byId : {};
};


export default combineReducers({
    byId
});
