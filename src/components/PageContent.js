import React from 'react'
import {Container} from 'react-bootstrap'
import ShoeList from "./ShoeList"
import InfoBox from "./InfoBox"
import OrderBox from './OrderBox'
import UploadForm from './UploadForm'


export default function PageContent(props) {
    return (
        <Container>
            {props.view==="shoes" ? <ShoeList shoes={props.shoes}/> : props.view==="info" ? <InfoBox/> : props.view==="order" ? <UploadForm/> : <ShoeList shoes={props.shoes}/>}
        </Container>
    )
}
