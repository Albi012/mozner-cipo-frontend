import React from "react";
import { Container } from "react-bootstrap";
import ShoeList from "./ShoeList";
import InfoBox from "./InfoBox";
import LoginForm from "./LoginForm";
import ShoeEditList from "./ShoeEditList";
import OrderBox from "./OrderBox";
import UploadForm from "./UploadForm";

class PageContent extends React.Component {

  render() {
    return (
      <Container>
        {this.props.view === "shoes" ? (
          <ShoeList shoes={this.props.shoes}/>
        ) : this.props.view === "info" ? (
          <InfoBox />
        ) : this.props.view === "order" ? (
          <OrderBox />
        ) : this.props.view === "upload" ? (
          <UploadForm />
        ) : this.props.view === "edit" ? (
          <ShoeEditList />
        ) : this.props.view === "login" ? (
          <LoginForm />
        ) : (
          <div>helo</div>
        )}
      </Container>
    );
  }
}

export default PageContent;
