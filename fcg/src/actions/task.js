
import {TASK} from '@actions';



/********************************************
 Get Tasks List
 ********************************************/
export const fetchTasks = payload => ({
    type : TASK.FETCHLIST.REQUEST,
    payload
});

export const fetchTasksSuccess = payload => ({
    type : TASK.FETCHLIST.SUCCESS,
    payload
});

export const fetchTasksError = payload => ({
    type : TASK.FETCHLIST.ERROR,
    payload
});
