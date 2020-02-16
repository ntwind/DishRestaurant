import React from 'react';
import './Tile.scss'

export default function Tile(dish) {

    return <div className={'tile'}> {dish.dish.title} </div>
}