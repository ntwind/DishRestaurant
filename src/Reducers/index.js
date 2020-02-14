import { combineReducers } from 'redux'
import dishesReducer from './DishesReducer'


export default combineReducers({
    dishes:dishesReducer,
})