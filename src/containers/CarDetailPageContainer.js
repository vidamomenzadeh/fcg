import React from "react";
import { Component } from 'react';
import { connect } from 'react-redux';
import {fetchCar, updateCar, fetchModel, fetchTrim} from '@actions/car';
import {fetchTasks, updateTask} from "@actions/task";
import { getCarById }  from '@reducers/car';
import {withRouter} from "react-router";
import LayoutCmp from '@components/LayoutCmp';
import TasksList from "@components/tasks/tasksList";
import {getTasksById} from "@reducers/task";
import {WrappedCarDetailForm} from "@components/car/CarFormDetail";
import {Row,Col} from "antd";
import CarFinancialInfo from "@components/car/CarFinancialInfo"

class CarDetailPageContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {fetchCar, fetchTasks} = this.props;
        fetchCar();
        fetchTasks();
    }

    render() {
        const {car, tasks, updateCar, updateTask, trims, models, fetchTrim, fetchModel} = this.props;

        return(
            <LayoutCmp  showFooter={true}
                        showHeader={true}>
                <div className="app">
                    <Row>
                        <Col span={8}>
                            <WrappedCarDetailForm car={car}
                                                  trims={trims}
                                                  models={models}
                                                  fetchTrim={fetchTrim}
                                                  fetchModel={fetchModel}
                                                  updateCar={updateCar}/>
                        </Col>
                        <Col span={8}>
                            <CarFinancialInfo tasks={tasks}
                                              car={car}
                            />
                        </Col>
                        <Col span={8}>
                            <TasksList tasks={tasks}
                                       updateTask={updateTask}
                                       car={car}
                            />
                        </Col>
                    </Row>


                </div>
                {this.props.children}
            </LayoutCmp>
        )
    }
}

function mapStateToProps(state) {
    return {
        car : getCarById(state),
        tasks : getTasksById(state),
        trims : state.car.trims,
        models : state.car.models
    }
}

export default withRouter(connect(mapStateToProps, {
    fetchCar,
    fetchTasks,
    updateCar,
    updateTask,
    fetchModel,
    fetchTrim
})(CarDetailPageContainer));
