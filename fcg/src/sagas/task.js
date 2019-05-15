
import {take, put, call, fork, actionChannel, takeEvery} from 'redux-saga/effects'
import * as actions from "@actions/task"
import handleResponse from "@sagas/handleResponse";
import {TASK} from "@actions";
import queries from "@queries/car"

function* getTasks({payload}) {
    let response = yield queries.getTasks(0);

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

export function* taskSaga(){
    return [
        yield takeEvery(TASK.FETCHLIST.REQUEST, getTasks)
    ]
}