import React from 'react';
import './Tile.scss'


export default function Tile(dish) {
    const d = dish.dish;
    const {img, title, descr, ingredients,cals,price, serves} = d;

    return <div className={'tile'}>
        <img src={img}/>
        <div className={'tile-cotent'}>
            <div className={'flex-row  space-berween'}>
                <span className={'uppercase'}>{ingredients}</span>
                <span className={'uppercase'}>{cals}KCL</span>
            </div>
            <h3 className={'bold'}>{title}</h3>
            <div className={'descr'}> {descr}</div>
            <div className={'flex-row  space-berween'}>
                <span className={'bold'}>${price}</span>
                <span >For {serves} persons</span>
            </div>
        </div>

        </div>
}