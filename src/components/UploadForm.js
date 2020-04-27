import React, { Component } from "react";
import axios from "axios";
import firebaseApp from '../config/FireConfig'
import { Form, Row, Col, Button } from "react-bootstrap";

class UploadForm extends Component {
  state = { brand: "", name: "", size: "", image: "", price: "" };

  handleFileChange = (event) => {
    if (event.target.files[0]) {
      this.setState({
        image: event.target.files[0],
      });
    }
  };

  handleUpload = (event) => {
    event.preventDefault();
    var headers = {
      "Content-Type": "application/json",
    };
    const storageRef = firebaseApp.storage().ref();
    const uploadTask = storageRef
      .child(this.state.image.name)
      .put(this.state.image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {},
      () => {
        storageRef
          .child(this.state.image.name)
          .getDownloadURL()
          .then((url) => {
            axios
              .post(
                `http://localhost:8080/save-new-shoe/`,
                {
                  brand: this.state.brand,
                  name: this.state.name,
                  price: this.state.price,
                  size: this.state.size,
                  url: url,
                },
                headers
              )
              .then((res) => {
                console.log(res);
              });
          });
      }
    );
  };

  handleBrandChange = (event) => {
    this.setState({ brand: event.target.value });
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSizeChange = (event) => {
    this.setState({ size: event.target.value });
  };

  handlePriceChange = (event) => {
    this.setState({ price: event.target.value });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleUpload}>
          <Row style={{ margin: "10px" }}>
            <Col>
              <Form.Control
                placeholder="Márka"
                type="text"
                value={this.state.brand}
                onChange={this.handleBrandChange}
              />
            </Col>
          </Row>
          <Row style={{ margin: "10px" }}>
            <Col>
              <Form.Control
                placeholder="Név"
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
            </Col>
          </Row>
          <Row style={{ margin: "10px" }}>
            <Col>
              <Form.Control
                placeholder="Méret"
                type="number"
                value={this.state.size}
                onChange={this.handleSizeChange}
              />
            </Col>
          </Row>
          <Row style={{ margin: "10px" }}>
            <Col>
              <Form.Control
                placeholder="Ár"
                type="text"
                value={this.state.price}
                onChange={this.handlePriceChange}
              />
            </Col>
          </Row>
          <Row style={{ margin: "10px" }}>
            <Col style={{textAlign: "center"}}>
              <Form.File>
                <Form.File.Input onChange={this.handleFileChange} />
              </Form.File>
            </Col>
          </Row>
          <Row style={{ margin: "10px" }}>
            <Col style={{textAlign: "center"}}>
              <Button type="submit">Feltöltés!</Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default UploadForm;
