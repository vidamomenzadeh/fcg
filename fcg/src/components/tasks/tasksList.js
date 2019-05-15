import React from "react";
import {Icon} from "antd";

export default function TasksList(props){
    const {tasks} = props;
    return (
        <div className={"tasks-list-wrapper"}>
            <h1>A List of tasks</h1>
            <ul>
                {Object.keys(tasks).map((task)=>(<li>task</li>))}
            </ul>
            <div className={"new-task"}>
                <Icon type="plus" />
            </div>
        </div>
    );
}
