
import {take, put, call, fork, actionChannel, takeEvery} from 'redux-saga/effects'
import * as actions from "@actions/car"
import handleResponse from "@sagas/handleResponse";
import {CAR} from "@actions";
import queries from "@queries/car"
import {carId} from "@constants";

function* getCar({payload}) {
    let response = yield queries.getCar(carId);

    yield handleResponse(
        response,
        function* ({car}) {
            yield put(actions.fetchCarSuccess(car));

            if(car.make != ""){
                yield put(actions.fetchModel(car.make));
            }

            if(car.model != ""){
                yield put(actions.fetchTrim({
                    make : car.make,
                    model : car.model
                }));
            }
        },
        function* (error) {
            yield put(actions.fetchCarError(error.message))
        }
    )
}

function* updateCar({payload}) {
    let response = yield queries.updateCar(payload);

    yield handleResponse(
        response,
        function* ({car}) {
            yield put(actions.updateCarSuccess(car));
        },
        function* (error) {
            yield put(actions.updateCarError(error.message))
        }
    )
}

function* fetchModel({payload}) {
    let response = yield queries.getModel(payload);

    yield handleResponse(
        response,
        function* ({model}) {
            yield put(actions.fetchModelSuccess(model));
        },
        function* (error) {
            yield put(actions.fetchModelError(error.message))
        }
    )
}

function* fetchTrim({payload}) {
    let response = yield queries.getTrim(payload);

    yield handleResponse(
        response,
        function* ({trim}) {
            yield put(actions.fetchTrimSuccess(trim));
        },
        function* (error) {
            yield put(actions.fetchTrimError(error.message))
        }
    )
}


export function* carSaga(){
    return [
        yield takeEvery(CAR.FETCHITEM.REQUEST, getCar),
        yield takeEvery(CAR.UPDATE.REQUEST, updateCar),
        yield takeEvery(CAR.FETCHMODEL.REQUEST, fetchModel),
        yield takeEvery(CAR.FETCHTRIM.REQUEST, fetchTrim)
    ]
}