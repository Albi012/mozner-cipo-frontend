import React from 'react';
import "../ShoeItem.css"

const ShoeItem = (props) =>{
    return (
        <div className="item">
            <div className="content">
                <div className="header shoe-item">
                    Name : {props.name} 
                    Size : {props.size}
                </div>
            </div>
        </div>
    )
}

export default ShoeItem;