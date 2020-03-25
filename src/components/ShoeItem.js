import React from 'react';

const ShoeItem = (props) =>{
    return (
        <div style={{border:"1px solid black"}}>
            <div>Name : {props.name}</div>
            <div>Size : {props.size}</div>
        </div>
    )
}

export default ShoeItem;