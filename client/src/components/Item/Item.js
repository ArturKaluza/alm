import React from 'react';
import { Link } from 'react-router-dom';
import style from './Item.css';

const Item = (props) => (
    <div className="item">
        <h2 className="item__header" onClick={props.itemDetail}>{props.name}</h2>
        <p className="item__desc">Description: {props.desc}</p>
        <div>
            <p className="item__amount">Available pieces: <span>{props.amount}</span></p>
        </div>
    </div>
);

export default Item;