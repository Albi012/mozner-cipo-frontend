import React from 'react'
import ShoeList from "./ShoeList"
import InfoBox from "./InfoBox"
import OrderBox from './OrderBox'


export default function PageContent(props) {
    return (
        <div>
            {props.view==="shoes" ? <ShoeList shoes={props.shoes}/> : props.view==="info" ? <InfoBox/> : props.view==="order" ? <OrderBox/> : <div>Home</div>}
        </div>
    )
}
