import React from 'react';
import "../ShoeItem.css"

const ShoeItem = (props) =>{
    return (
        <div className="column">
            <div className="content">
                <div className="header shoe-item">
                    <img src={require('../images/image2.jpg')} alt="123" height="150" width="200"/>
                    Name : {props.name} 
                    Size : {props.size}
                </div>
            </div>
        </div>
    )
}

export default ShoeItem;