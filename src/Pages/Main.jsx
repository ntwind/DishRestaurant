import React from 'react';
import { useSelector } from 'react-redux'
import {fetchDishes} from '../Actions/Dishes'

export default function MainPage() {
    const dishes = useSelector(state => state.dishes);
    const loadingInProgress = useSelector(state => state.loadingDataInProgress);

    return <div>Dishes count: {dishes.length}</div>;
}