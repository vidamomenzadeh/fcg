import { call, all, spawn } from 'redux-saga/effects'
import { carSaga }  from "@sagas/car";
import { taskSaga }  from "@sagas/task";


export default function* rootSaga() {
    const sagas = [
        carSaga,
        taskSaga
    ];

    yield all(sagas.map(saga =>
        spawn(function* () {
            while (true) {
                try {
                    yield call(saga)
                    break
                }
                catch (e) {

                }
            }
        })
    ));


}

