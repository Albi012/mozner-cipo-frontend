import React from 'react';
import "../ShoeItem.css"

const ShoeItem = (props) =>{
    return (
        <div>
            <div >
                <div>>
                    <img src={require(`../images/image${props.id}.jpg`)} alt="123" height="auto" width="100%" />
                </div>
                <div style={{textAlign:"center"}}>
                    {props.name} <br/>
                    Méret: {props.size}  Ár: {props.price}
                </div>
            </div>
        </div>
    )
}

export default ShoeItem;