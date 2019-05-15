import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import logger  from 'redux-logger'
import createSagaMiddleware, { END } from 'redux-saga'
import { routerMiddleware , push} from 'react-router-redux';
import { history } from '@history';


export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [ sagaMiddleware ];
    middleware.push(logger);
    middleware.push(routerMiddleware(history));

    const store = createStore(
        rootReducer,
        applyMiddleware(...middleware)
    );

    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);
    return store
}
