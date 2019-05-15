import { createActionSet, createPaginationActionSet } from '@utils/action_helper';


export const CAR = {
    FETCHITEM       : createActionSet('CAR_FETCHITEM'),
    UPDATE          : createActionSet('CAR_UPDATE'),
    FETCHMODEL      : createActionSet('CAR_FETCH_MODEL'),
    FETCHTRIM       : createActionSet('CAR_FETCH_TRIM'),
};

export const TASK = {
    FETCHLIST       : createActionSet('TASK_FETCHLIST'),
    CREATE          : createActionSet('TASK_CREATE'),
    UPDATE          : createActionSet('TASK_UPDATE'),
};





