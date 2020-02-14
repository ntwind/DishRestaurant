import {getDishes as getDishesApiCall} from '../Services/Dishes'

export const  DISHES_FETCH_START = "DISHES_FETCH_START";
export const  DISHES_FETCH_SUCCESS = "DISHES_FETCH_SUCCESS";
export const  DISHES_FETCH_ERROR = "DISHES_FETCH_ERROR";


export function DishesFetchInProgress() {
    return {
        type: DISHES_FETCH_START
    }
}

export function DishesFetchSuccess(payload) {
    return {
        type: DISHES_FETCH_START,
        payload:payload
    }
}

export function DishesFetchError(errorMsg) {
    return {
        type: DISHES_FETCH_START,
        payload:errorMsg
    }
}

export function fetchDishes(page, qtu) {
    return (dispatch) => {
        return  getDishesApiCall(page, qtu).then(res => {
            dispatch(DishesFetchSuccess(res));
        });
    }
}