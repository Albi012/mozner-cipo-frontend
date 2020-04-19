import React from 'react';
import "../ShoeItem.css"

const ShoeItem = (props) =>{
    console.log(props)
    return (
        <div className="column">
            <div className="card" style={{margin:"20px",backgroundColor:'grey',borderRadius:"25px"}}>
                <div className="image" >
                    <img src={require(`../images/image${props.id}.jpg`)} alt="123" height="auto" width="100%" style={{borderTopRadius:"25px"}}/>
                </div>
                <div className="content" style={{textAlign:"center"}}>
                    {props.name} <br/>
                    Méret: {props.size}  Ár: {props.price}
                </div>
            </div>
        </div>
    )
}

export default ShoeItem;