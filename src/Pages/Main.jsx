import React, { useEffect, useState  } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {fetchDishes} from '../Actions/Dishes'
import Tile from '../Widgets/Tile'
import './Main.scss'


export default function MainPage() {
    const dishes = useSelector(state => state.dishes.dishes);
    const loadingInProgress = useSelector(state => state.dishes.loadingDataInProgress);
    const dispatch = useDispatch();
    const [pageNum, setPageNum] = useState(0);
    const loadThreshold = 50;

    useEffect(() => {
        dispatch( fetchDishes() );
    }, [pageNum]);

    function handleScroll() {

        if ( (Math.floor(window.innerHeight + document.documentElement.scrollTop) < Math.floor(document.documentElement.offsetHeight - loadThreshold)  || loadingInProgress)) return;
        dispatch( fetchDishes() );
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    let tiles = dishes.map( (dish,index) => <Tile key={index} dish={dish} /> );

    return <div className={'container'}>{tiles}</div>;
}