import React from "react";
import { Component } from 'react';
import { connect } from 'react-redux';
import {fetchCar} from '@actions/car';
import {fetchTasks} from "@actions/task";
import { getCarById }  from '@reducers/car';
import {withRouter} from "react-router";
import LayoutCmp from '@components/LayoutCmp';
import CarDetail from "@components/car/CarFinancialInfo";
import TasksList from "@components/tasks/tasksList";
import {getTasksById} from "@reducers/task";

class CarDetailPageContainer extends Component {

    constructor(props) {
        super(props);


    }

    componentDidMount() {
        const {fetchCar} = this.props;
        fetchCar();
    }

    render() {
        const {car, tasks} = this.props;

        return(
            <LayoutCmp  showFooter={true}
                        showHeader={true}>
                <div className="app">
                    <CarDetail car={car}/>
                    <CarForm car={car}/>
                    <TasksList tasks={tasks}
                               car={car}
                    />
                </div>
            </LayoutCmp>
        )
    }
}

function mapStateToProps(state) {
    return {
        car : getCarById(state),
        tasks : getTasksById(state)
    }
}

export default withRouter(connect(mapStateToProps, {
    fetchCar,
    fetchTasks
})(CarDetailPageContainer));
