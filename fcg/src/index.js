import React from 'react';
import Root from './Router';
import { render } from 'react-dom';
import { history } from '@history';
import configureStore from '@store/configureStore'
import rootSaga from '@sagas'
import '@sass/styles.scss'

const store = configureStore("development");
store.runSaga(rootSaga);


const rootElement = document.createElement("div");
rootElement.id = "root";
document.body.appendChild(rootElement);


render(
    <Root store={store} history={history} />,
    document.getElementById('root')
);


