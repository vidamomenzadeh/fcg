/**
 * Render Car Details
 * */

import React from "react";
import {Divider, Form, Select, Button, Input} from "antd";
import {PhysicalStatus, SellingStatus} from "@constants";
import {EngineType, LegalStatus} from "@constants";
import PropTypes from "prop-types";

const CarFormDetail =(props)=>{
    const {car = {}, updateCar, trims = [], models = [], fetchModel, fetchTrim, form} = props;
    const {getFieldDecorator, validateFieldsAndScroll} = form;

    /**
     * Submit Car Detail Form
     * */

    const handleSubmit = ()=>{
        validateFieldsAndScroll((err, values) => {
            updateCar(values);
        });
    }

    /**
     * Handel For when Make option in form is changed
     * */

    const onChangeMake = (e)=>{
        fetchModel(e.target.value);
        form.setFieldsValue({"model": ""});
        form.setFieldsValue({"trim": ""});
    }

    /**
     * Handel For when Model option in form is changed
     * */

    const onChangeModel = (value)=>{
        const payload = {
            model : value,
            make : props.form.getFieldValue("make")
        };
        form.setFieldsValue({"trim": ""});
        fetchTrim(payload)
    }

    return (
        <Form className={"col car-detail-form"} >
            <Divider orientation="left">Statue</Divider>
            <Form.Item label={"Physical Status"}>
                {getFieldDecorator('physicalStatus', {
                    initialValue : car.physicalStatus
                })(
                    <Select>
                        {Object.keys(PhysicalStatus).map((item)=>(<Select.Option key={item} value={item}>{PhysicalStatus[item]}</Select.Option>))}
                    </Select>
                )}
            </Form.Item>
            <Form.Item label={"Legal Status"}>
                {getFieldDecorator('legalStatus', {
                    initialValue : car.legalStatus
                })(
                    <Select>
                        {Object.keys(LegalStatus).map((item)=>(<Select.Option key={item} value={item}>{LegalStatus[item]}</Select.Option>))}
                    </Select>
                )}
            </Form.Item>
            <Form.Item label={"Selling Status"}>
                {getFieldDecorator('sellingStatus', {
                    initialValue : car.sellingStatus
                })(
                    <Select>
                        {Object.keys(SellingStatus).map((item)=>(<Select.Option key={item} value={item}>{SellingStatus[item]}</Select.Option>))}
                    </Select>
                )}
            </Form.Item>
            <Form.Item label={"Make"}>
                {getFieldDecorator('make', {
                    initialValue : car.make
                })(
                   <Input onBlur={(e)=>{onChangeMake(e)}}/>
                )}
            </Form.Item>
            <Form.Item label={"Model"}>
                {getFieldDecorator('model', {
                    initialValue : car.model
                })(
                    <Select onChange={(value)=>{onChangeModel(value)}}>
                        {Object.keys(models).map((item)=>(<Select.Option key={item} value={models[item]}>{models[item]}</Select.Option>))}
                    </Select>
                )}
            </Form.Item>
            <Form.Item label={"Trim"}>
                {getFieldDecorator('trim', {
                    initialValue : car.trim
                })(
                    <Select>
                        {Object.keys(trims).map((item)=>(<Select.Option key={item} value={trims[item]}>{trims[item]}</Select.Option>))}
                    </Select>
                )}
            </Form.Item>
            <Form.Item label={"Engine Type"}>
                {getFieldDecorator('engineType', {
                    initialValue : car.engineType
                })(
                    <Select>
                        {Object.keys(EngineType).map((item)=>(<Select.Option key={item} value={item}>{EngineType[item]}</Select.Option>))}
                    </Select>
                )}
            </Form.Item>

            <Button className={"submit-btn"} onClick={()=>handleSubmit()}>Submit</Button>

        </Form>
    );
}

CarFormDetail.propTypes  = {
    car             : PropTypes.object.isRequired,
    trim            : PropTypes.array,
    models          : PropTypes.array,
    updateCar       : PropTypes.func.isRequired,
    fetchModel      : PropTypes.func.isRequired,
    fetchTrim       : PropTypes.func.isRequired
};

export const  WrappedCarDetailForm = Form.create({ name: 'car_detail' })(CarFormDetail);