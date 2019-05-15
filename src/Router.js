import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import CarPageContainer from './containers/CarDetailPageContainer';
import TasksForm from "@components/tasks/tasksForm";



const Root = ({store, history}) => {
    return <Provider store={store}>
        <Router history={history}>
            <Fragment>
                <Switch>
                    <CarPageContainer>
                        <Route exact path='/tasks/create' component={TasksForm} />
                    </CarPageContainer>
                </Switch>
            </Fragment>
        </Router>
    </Provider>
};

export default Root;
