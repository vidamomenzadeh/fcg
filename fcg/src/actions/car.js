
import {CAR} from '@actions';



/********************************************
 Get Car
 ********************************************/
export const fetchCar = payload => ({
    type : CAR.FETCHITEM.REQUEST,
    payload
});

export const fetchCarSuccess = payload => ({
    type : CAR.FETCHITEM.SUCCESS,
    payload
});

export const fetchCarError = payload => ({
    type : CAR.FETCHITEM.ERROR,
    payload
});
