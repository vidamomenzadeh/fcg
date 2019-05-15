
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


/********************************************
 Update Car
 ********************************************/
export const updateCar = payload => ({
    type : CAR.UPDATE.REQUEST,
    payload
});

export const updateCarSuccess = payload => ({
    type : CAR.UPDATE.SUCCESS,
    payload
});

export const updateCarError = payload => ({
    type : CAR.UPDATE.ERROR,
    payload
});


/********************************************
 Fetch Trim
 ********************************************/
export const fetchTrim = payload => ({
    type : CAR.FETCHTRIM.REQUEST,
    payload
});

export const fetchTrimSuccess = payload => ({
    type : CAR.FETCHTRIM.SUCCESS,
    payload
});

export const fetchTrimError = payload => ({
    type : CAR.FETCHTRIM.ERROR,
    payload
});



/********************************************
 Fetch Model
 ********************************************/
export const fetchModel = payload => ({
    type : CAR.FETCHMODEL.REQUEST,
    payload
});

export const fetchModelSuccess = payload => ({
    type : CAR.FETCHMODEL.SUCCESS,
    payload
});

export const fetchModelError = payload => ({
    type : CAR.FETCHMODEL.ERROR,
    payload
});

