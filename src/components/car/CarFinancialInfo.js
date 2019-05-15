/**
* Render Car Financial Information
* */

import React from "react";
import {Divider} from "antd";
import moment from "moment";
import PropTypes from "prop-types";

const CarFinancialInfo = React.memo(function CarFinancialInfo(props){
    const {car} = props;
    const {financialDetails = {}} = car;
    return (
        <div className={"car-details-wrapper col"}>
            <Divider orientation="left">Financial Information</Divider>
            <div className={"gray"}>Purchase</div>
            <div>${financialDetails.purchasePrice} ({moment(financialDetails.purchaseDate).format("YYYY/MM/DD")}, {financialDetails.purchaseLocation})</div>
            <div>{financialDetails.paymentDonePercentage}% payments to buyer done</div>
            <div className={"gray"}>Sold</div>
            <div>${financialDetails.sellingPrice} ({moment(financialDetails.sellingDate).format("YYYY/MM/DD")}, {financialDetails.sellingLocation})</div>
            <div>{financialDetails.sellingDonePercentage}% payments from seller done</div>
        </div>
    );
});

CarFinancialInfo.propTypes  = {
    car  : PropTypes.object.isRequired,
};

export default CarFinancialInfo;
