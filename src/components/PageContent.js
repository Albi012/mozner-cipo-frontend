import React from 'react'
import ShoeList from "./ShoeList"
import InfoBox from "./InfoBox"


export default function PageContent(props) {
    return (
        <div>
            {props.view==="shoes" ? <ShoeList shoes={props.shoes}/> : props.view==="info" ? <InfoBox/> : <div>3</div>}
        </div>
    )
}
