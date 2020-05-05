import React, { Component } from "react";
import axios from "axios";
import firebaseApp from "../config/FireConfig";
// import ShoeEditList from "./ShoeEditList";
import {
  Form,
  Row,
  Col,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

class UploadForm extends Component {
  state = { brand: "",shoeNumber:"", size: "", image: "", price: "", category: "" };

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
                  shoeNumber: this.state.shoeNumber,
                  price: this.state.price,
                  size: this.state.size,
                  category: this.state.category,
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

  handleCategorySelect = (event) => {
    this.setState({ category: event });
  };

  handleBrandChange = (event) => {
    this.setState({ brand: event.target.value });
    console.log(this.state)
  };

  handleShoeNumberChange = (event) => {
    this.setState({ shoeNumber: event.target.value });
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
        <Form
          onSubmit={this.handleUpload}
          style={{
            backgroundColor: "#b3b3b3",
            borderRadius: "25px",
            padding: "10px",
            margin: "10px",
          }}
        >
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
                placeholder="Szám"
                type="text"
                value={this.state.shoeNumber}
                onChange={this.handleShoeNumberChange}
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
                type="number"
                value={this.state.price}
                onChange={this.handlePriceChange}
              />
            </Col>
          </Row>
          <Row style={{ margin: "10px" }}>
            <Col>
              <DropdownButton onSelect={this.handleCategorySelect} title="Kategória">
                <Dropdown.Item eventKey="men">Férfi</Dropdown.Item>
                <Dropdown.Item eventKey="women">Női</Dropdown.Item>
                <Dropdown.Item eventKey="child">Gyerek</Dropdown.Item>
              </DropdownButton>
            </Col>
          </Row>
          <Row style={{ margin: "10px" }}>
            <Col style={{ textAlign: "center" }}>
              <Form.File>
                <Form.File.Input onChange={this.handleFileChange} />
              </Form.File>
            </Col>
          </Row>
          <Row style={{ margin: "10px" }}>
            <Col style={{ textAlign: "center" }}>
              <Button type="submit">Feltöltés!</Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default UploadForm;
