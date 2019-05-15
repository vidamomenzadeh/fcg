
import {take, put, call, fork, actionChannel, takeEvery} from 'redux-saga/effects'
import * as actions from "@actions/car"
import handleResponse from "@sagas/handleResponse";
import {CAR} from "@actions";
import queries from "@queries/car"

function* getCar({payload}) {
    let response = yield queries.getCar(0);

    yield handleResponse(
        response,
        function* (data) {
            yield put(actions.fetchCarSuccess(data));
        },
        function* (error) {
            yield put(actions.fetchCarError(error.message))
        }
    )
}

export function* carSaga(){
    return [
        yield takeEvery(CAR.FETCHITEM.REQUEST, getCar)
    ]
}