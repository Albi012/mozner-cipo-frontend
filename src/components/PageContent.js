import React from 'react'
import ShoeList from "./ShoeList"
import InfoBox from "./InfoBox"
import OrderBox from './OrderBox'
import UploadForm from './UploadForm'


export default function PageContent(props) {
    return (
        <div>
            <UploadForm/>
            {props.view==="shoes" ? <ShoeList shoes={props.shoes}/> : props.view==="info" ? <InfoBox/> : props.view==="order" ? <OrderBox/> : <ShoeList shoes={props.shoes}/>}
        </div>
    )
}
