import React from "react";
import { Container } from "react-bootstrap";
import ShoeList from "./ShoeList";
import InfoBox from "./InfoBox";
import LoginForm from "./LoginForm";
import Editor from './Editor'
import OrderBox from "./OrderBox";
import UploadForm from "./UploadForm";
import ItemList from './ItemList'

class PageContent extends React.Component {
  
  render() {
    return (
      <Container>
        {this.props.view === "shoes" ? (
          <ShoeList shoes={this.props.shoes} />
        ) : this.props.view === "info" ? (
          <InfoBox />
        ) : this.props.view === "order" ? (
          <OrderBox />
        ) : this.props.view === "upload" ? (
          <UploadForm />
        ) : this.props.view === "edit" ? (
          <Editor/>
        ) : this.props.view === "login" ? (
          <LoginForm />
        ) : this.props.view === "bag" ? (
          <ItemList items={this.props.items} />
        ) : this.props.view === "accessories" ? (
          <ItemList items={this.props.items} />
        ) : this.props.view === "mask" ? (
          <ItemList items={this.props.items} />
        ) : <ShoeList shoes={this.props.shoes}/>}
      </Container>
    );
  }
}

export default PageContent;
