import React from 'react';

const Item = (props) => (
    <div>
        {console.log(props)}
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
        <div>
            <p>Available pieces: <span>{props.amount}</span></p>
        </div>
    </div>
);

export default Item;