import { combineReducers } from 'redux';
import {TASK} from "@actions";


export const byId = (state = {}, action)=> {

    switch (action.type) {
        case TASK.FETCHLIST.SUCCESS:
            return {
                ...action.payload.tasks.reduce( (obj, task) => {
                    obj[task.id] = task;
                    return obj;
                }, {})
            };

        case TASK.CREATE.SUCCESS:
            return {
                ...state,
                [action.payload.id] :action.payload
            };


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
