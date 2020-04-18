import React from 'react';
import "../ShoeItem.css"

const ShoeItem = (props) =>{
    return (
        <div className="column">
            <div className="card">
                <div className="image">
                    <img src={require('../images/image2.jpg')} alt="123" height="220" width="300"/>
                </div>
                <div className="content">
                    Name : {props.name} 
                </div>
                <div className="description">
                   Size : {props.size}
                </div>
            </div>
        </div>
    )
}

export default ShoeItem;