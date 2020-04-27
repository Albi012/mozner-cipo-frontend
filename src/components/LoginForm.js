import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import firebaseApp from "../config/FireConfig";

class LoginForm extends Component {
  state = { email: "", pass: "" };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePassChange = (event) => {
    this.setState({ pass: event.target.value });
  };

  handleSignOut = (event) => {
    firebaseApp.auth().signOut();
  };

  handleLogin = (event) => {
    event.preventDefault();
    const promise = firebaseApp
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.pass);
    promise.catch((event) => console.log(event.message));
  };

  render() {
    return (
      <div>
        <div>
          <Form
            onSubmit={this.handleLogin}
            style={{
              backgroundColor: "#b3b3b3",
              borderRadius: "25px",
              padding: "10px",
              margin:'10px'
            }}
          >
            <Row style={{ margin: "10px" }}>
              <Col>
                <Form.Control
                  onChange={this.handleEmailChange}
                  placeholder="Email"
                  type="text"
                />
              </Col>
            </Row>
            <Row style={{ margin: "10px" }}>
              <Col>
                <Form.Control
                  onChange={this.handlePassChange}
                  placeholder="Jelszó"
                  type="password"
                />
              </Col>
            </Row>
            <Row style={{ margin: "10px" }}>
              <Col style={{ textAlign: "center" }}>
                <Button type="submit">Login!</Button>
              </Col>
              <Col>
                <Button onClick={this.handleSignOut}>Logout!</Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
