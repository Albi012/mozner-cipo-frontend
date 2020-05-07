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
    localStorage.setItem("user",null)
  };

  handleLogin = (event) => {
    event.preventDefault();
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.pass)
      .catch((error) => alert("Nincs ilyen felhasználó!"));
    firebaseApp.auth().onAuthStateChanged(function (user) {
      if (user) {
        localStorage.setItem("user", user.uid);
        alert("Sikeres bejelentkezés!");
      } else {
        localStorage.setItem("user", null);
      }
    });
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
              margin: "10px",
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
              {localStorage.getItem("user") !== "null" ? (
                <Col style={{ textAlign: "center" }}>
                  <Button onClick={this.handleSignOut}>Kijelentkezés!</Button>
                </Col>
              ) : (
                <Col>
                  <Button type="submit">Bejelentketés!</Button>
                </Col>
              )}
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
