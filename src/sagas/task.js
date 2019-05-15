
import {take, put, call, fork, actionChannel, takeEvery} from 'redux-saga/effects'
import * as actions from "@actions/task"
import handleResponse from "@sagas/handleResponse";
import {TASK} from "@actions";
import queries from "@queries/task";
import {carId} from "@constants";

function* getTasks({payload}) {
    let response = yield queries.getTasks(carId);

    yield handleResponse(
        response,
        function* (data) {
            yield put(actions.fetchTasksSuccess(data));
        },
        function* (error) {
            yield put(actions.fetchTasksError(error.message))
        }
    )
}


function* createTask({payload}) {
    let response = yield queries.createTask(carId, payload);

    yield handleResponse(
        response,
        function* (data) {
            payload.id = data.createTask;
            yield put(actions.createTaskSuccess(payload));
        },
        function* (error) {
            yield put(actions.createTaskError(error.message))
        }
    )
}

function* updateTask({payload}) {
    let response = yield queries.updateTask(payload.id, payload.completed);

    yield handleResponse(
        response,
        function* (data) {
            yield put(actions.updateTaskSuccess(data));
        },
        function* (error) {
            yield put(actions.updateTaskError(error.message))
        }
    )
}



export function* taskSaga(){
    return [
        yield takeEvery(TASK.FETCHLIST.REQUEST, getTasks),
        yield takeEvery(TASK.CREATE.REQUEST, createTask),
        yield takeEvery(TASK.UPDATE.REQUEST, updateTask)
    ]
}