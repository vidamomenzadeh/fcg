import React from "react";
import {Icon, Checkbox} from "antd";
import {NavLink} from "react-router-dom";
import {TaskType} from "@constants";
import PropTypes from "prop-types";

const TasksList = React.memo(function TasksList(props){
    const {tasks, updateTask} = props;

    const getIcon = (type)=>{
        switch (type) {
            case "ADD_DOCUMENT":
                return <Icon type="paper-clip" />;
            case "WASH_CAR":
                return <Icon type="car" />;
            case "ADD_PAYMENT_DETAILS":
                return <Icon type="money-collect" />;

        }
    };

    const onChangeCompleted = (e, task)=>{
        updateTask({
            id : task.id,
            completed : e.target.checked
        })
    }

    return (
        <div className={"tasks-list-wrapper col"}>
            <h3>A List of tasks</h3>
            <ul>
                {Object.keys(tasks).map((index)=>(
                    <li key={`task-list-${tasks[index].id}`}>
                        {getIcon(tasks[index].taskType)}
                        <div>{tasks[index].comment}</div>
                        <Checkbox onChange={(e)=>{onChangeCompleted(e, tasks[index])}}
                                  defaultChecked={tasks[index].completed} />
                    </li>
                ))}
            </ul>
            <div className={"new-task"}>
                <NavLink to={"/tasks/create"}>
                    <Icon type="plus" />
                </NavLink>
            </div>
        </div>
    );
})


TasksList.propTypes  = {
    tasks            : PropTypes.object,
    updateTask       : PropTypes.func.isRequired
};

export default TasksList;