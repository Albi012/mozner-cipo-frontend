import React, { Component } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import axios from 'axios'

class Editor extends Component {
  state = { brand: "", shoeNumber: "", size: "", name: "", formType: "" };

  handleFormTypeChange = (event) => {
    this.setState({ formType: event.target.value });
  };

  handleBrandChange = (event) => {
    this.setState({ brand: event.target.value });
  };
  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleShoeNumberChange = (event) => {
    this.setState({ shoeNumber: event.target.value });
  };

  handleSizeChange = (event) => {
    this.setState({ size: event.target.value });
  };

  handleShoeDelete = (event) => {
    event.preventDefault();
    axios
      .get(
        `http://localhost:8080/shoe/delete/${this.state.brand}/${this.state.shoeNumber}`
      )
      .then((res) => {
        alert("A törlés sikeres!");
      });
  };
  handleItemDelete = (event) => {
    event.preventDefault();
    axios
      .get(
        `http://localhost:8080/items/delete/${this.state.name}`
      )
      .then((res) => {
        alert("A törlés sikeres!");
      });
  };
  addShoeSize= (event) => {
    event.preventDefault();
    axios
      .get(
        `http://localhost:8080/shoe/add/${this.state.brand}/${this.state.shoeNumber}/${this.state.size}`
      )
      .then((res) => {
        alert("A méret hozzáadás sikeres!");
      });
  };
  removeShoeSize = (event) => {
    event.preventDefault();
    axios
      .get(
        `http://localhost:8080/shoe/delete/${this.state.brand}/${this.state.shoeNumber}/${this.state.size}`
      )
      .then((res) => {
        alert("A méret törlése sikeres!");
      });
  };

  render() {
    return (
      <Container
        style={{
          margin: "10px",
          height: "auto",
          weight: "auto",
          backgroundColor: "#b3b3b3",
          borderRadius: "25px",
          padding: "10px",
        }}
      >
        <Row style={{ margin: "10px" }}>
          <Col style={{ textAlign: "center" }}>
            <button
              className="btn btn-primary"
              value="shoeDelete"
              onClick={this.handleFormTypeChange}
            >
              Cipő törlés
            </button>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <button
              className="btn btn-primary"
              value="addShoeSize"
              onClick={this.handleFormTypeChange}
            >
              Cipő méret hozzáadása
            </button>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <button
              className="btn btn-primary"
              value="removeShoeSize"
              onClick={this.handleFormTypeChange}
            >
              Cipő méret törlése
            </button>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <button
              className="btn btn-primary"
              value="itemDelete"
              onClick={this.handleFormTypeChange}
            >
              Kiegészítő törlése!
            </button>
          </Col>
        </Row>
        {this.state.formType === "shoeDelete" ? (
          <Form onSubmit={this.handleShoeDelete}>
            <Row style={{ margin: "10px" }}>
              <Col>
                <Form.Control
                  placeholder="Márka"
                  type="text"
                  value={this.state.brand}
                  onChange={this.handleBrandChange}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="Szám"
                  type="text"
                  value={this.state.shoeNumber}
                  onChange={this.handleShoeNumberChange}
                />
              </Col>
              <Col style={{ textAlign: "center" }}>
                <Button type="submit">Törlés!</Button>
              </Col>
            </Row>
          </Form>
        ) : this.state.formType === "addShoeSize" ? (
          <Form onSubmit={this.addShoeSize}>
            <Row style={{ margin: "10px" }}>
              <Col>
                <Form.Control
                  placeholder="Márka"
                  type="text"
                  value={this.state.brand}
                  onChange={this.handleBrandChange}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="Szám"
                  type="text"
                  value={this.state.shoeNumber}
                  onChange={this.handleShoeNumberChange}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="Méret"
                  type="text"
                  value={this.state.size}
                  onChange={this.handleSizeChange}
                />
              </Col>
              <Col style={{ textAlign: "center" }}>
                <Button type="submit">Hozzáadás!</Button>
              </Col>
            </Row>
          </Form>
        ) : this.state.formType === "removeShoeSize" ? (
          <Form onSubmit={this.removeShoeSize}>
            <Row style={{ margin: "10px" }}>
              <Col>
                <Form.Control
                  placeholder="Márka"
                  type="text"
                  value={this.state.brand}
                  onChange={this.handleBrandChange}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="Szám"
                  type="text"
                  value={this.state.shoeNumber}
                  onChange={this.handleShoeNumberChange}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="Méret"
                  type="text"
                  value={this.state.size}
                  onChange={this.handleSizeChange}
                />
              </Col>
              <Col style={{ textAlign: "center" }}>
                <Button type="submit">Törlés!</Button>
              </Col>
            </Row>
          </Form>
        ) : (
          <Form onSubmit={this.handleItemDelete}>
            <Row>
              <Col>
                <Form.Control
                  placeholder="Név"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
              </Col>
              <Col style={{ textAlign: "center" }}>
                <Button type="submit">Törlés!</Button>
              </Col>
            </Row>
          </Form>
        )}
      </Container>
    );
  }
}

export default Editor;
