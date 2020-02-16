import {
    DISHES_FETCH_START,
    DISHES_FETCH_SUCCESS,
    DISHES_FETCH_ERROR,
} from '../Actions/Dishes'

const initialState = {
    dishes: [],
    loadingDataInProgress: false,
    errorMsg: false
};

function dishesReducer(state = initialState, action) {
    switch (action.type) {

        case DISHES_FETCH_START:
            return {...state, loadingDataInProgress: true};

        case DISHES_FETCH_SUCCESS:
            return {dishes: [...state.dishes, ...action.payload], errorMsg: void 0, loadingDataInProgress: false};

        case DISHES_FETCH_ERROR:
            return {...state, errorMsg: action.payload};

        default:
            return state;
    }
}

export default dishesReducer;