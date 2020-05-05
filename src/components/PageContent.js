import React from "react";
import { Container } from "react-bootstrap";
import ShoeList from "./ShoeList";
import InfoBox from "./InfoBox";
import LoginForm from "./LoginForm";
import ShoeEditList from "./ShoeEditList";
import OrderBox from "./OrderBox";
import UploadForm from "./UploadForm";
import axios from "axios";

class PageContent extends React.Component {
  state = { shoes: [] };

  componentDidMount() {
    var url = `http://localhost:8080/shoes/`
    axios.get(url).then((res) => {
      this.setState({ shoes: res.data });
      console.log(res.data)
    });
  }
  getSelectedShoes(){
    var url = `http://localhost:8080/shoes/${this.props.brand}/${this.props.category}`
    axios.get(url).then((res) => {
      this.setState({ shoes: res.data });
      console.log(res.data)
    });
  };


  render() {
    return (
      <Container>
        {this.props.view === "shoes" ? (
          <ShoeList shoes={this.state.shoes} />
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
