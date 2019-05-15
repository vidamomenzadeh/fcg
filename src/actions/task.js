
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



/********************************************
 Create Task
 ********************************************/
export const createTask = payload => ({
    type : TASK.CREATE.REQUEST,
    payload
});

export const createTaskSuccess = payload => ({
    type : TASK.CREATE.SUCCESS,
    payload
});

export const createTaskError = payload => ({
    type : TASK.CREATE.ERROR,
    payload
});


/********************************************
 Update Task
 ********************************************/
export const updateTask = payload => ({
    type : TASK.UPDATE.REQUEST,
    payload
});

export const updateTaskSuccess = payload => ({
    type : TASK.UPDATE.SUCCESS,
    payload
});

export const updateTaskError = payload => ({
    type : TASK.UPDATE.ERROR,
    payload
});
