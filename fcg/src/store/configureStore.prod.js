import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import rootReducer from '@reducers'
import {routerMiddleware} from "react-router-redux";
import {history} from "@history";

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = {
      ...createStore(
          rootReducer,
          initialState,
          applyMiddleware(
              routerMiddleware(history),
              sagaMiddleware
          )
      ),
      runSaga: sagaMiddleware.run,
      close : () => store.dispatch(END)
  };

  store.close = () => store.dispatch(END);
  return store
}



