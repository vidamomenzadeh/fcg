
/**
 * Render Task Form
 * */

import {Modal, Form, Input, Select} from "antd";
import React  from 'react';
import {TaskType} from "@constants";
import {createTask} from "@actions/task";
import {withRouter} from "react-router";
import connect from "react-redux/es/connect/connect";
import {history} from "@history";
import PropTypes from "prop-types";
const { Option} = Select;

const TaskForm = (props)=>{
    const {createTask} = props;
    const {getFieldDecorator, validateFieldsAndScroll} = props.form;
    const handleSubmit = ()=>{
        validateFieldsAndScroll((err, values) => {
            createTask(values);
            onCancel();
        });
    }

    const onCancel = ()=>{
        history.push('/');
    }

    return( <Modal
            visible={true}
            title="New task"
            okText="Submit"
            onCancel={onCancel}
            onOk={handleSubmit}
        >
        <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item label={"Type"}>
                {getFieldDecorator('taskType', {
                    rules: [{ required: true, message: 'Please select type of your task!' }],
                })(
                    <Select>
                        {Object.keys(TaskType).map((item)=>(<Option value={item}>{TaskType[item]}</Option>))}
                    </Select>
                )}
            </Form.Item>
            <Form.Item label={'Comment'}>
                {getFieldDecorator('comment', {
                    rules: [{ required: true, message: 'Please add one comment' }],
                })(
                   <Input />
                )}
            </Form.Item>
         </Form>
    </Modal>)
}


TaskForm.propTypes  = {
    createTask       : PropTypes.func.isRequired
};

const WrapperTaskForm = Form.create({ name: 'car_detail' })(TaskForm);
export default withRouter(connect(null, {
    createTask
})(WrapperTaskForm));