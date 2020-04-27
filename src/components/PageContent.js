import React from 'react'
import {Container} from 'react-bootstrap'
import ShoeList from "./ShoeList"
import InfoBox from "./InfoBox"
import LoginForm from './LoginForm'
import ShoeEditList from './ShoeEditList';
import OrderBox from './OrderBox'
import UploadForm from './UploadForm'


export default function PageContent(props) {
    return (
        <Container>
            {props.view==="shoes" ? <ShoeList/> : props.view==="info" ? <InfoBox/> : props.view==="order" ? <OrderBox/>: props.view==="upload" ? <UploadForm/>: props.view==="edit" ? <ShoeEditList/>: props.view==="login" ? <LoginForm/> : <ShoeList/>}
        </Container>
    )
}
