import React from "react";
import { Navbar,Nav } from "react-bootstrap";

const Header = (props) => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="bottom">
      <Navbar.Brand className="justify-content-between">
        <h3>Mózner cipőbolt</h3>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
      <button
        className="btn btn-primary"
        style={{ margin: "10px" }}
        onClick={props.loadShoes}
      >
        Cipők
      </button>
      <button
        className="btn btn-primary"
        style={{ margin: "10px" }}
        onClick={props.loadInfo}
      >
        Rólunk
      </button>
      <button
        className="btn btn-primary"
        style={{ margin: "10px" }}
        onClick={props.loadOrder}
      >
        Rendelés
      </button>
      <button
        className="btn btn-primary"
        style={{ margin: "10px" }}
        onClick={props.loadUploadForm}
      >
        Feltöltés
      </button>
      <button
        className="btn btn-primary"
        style={{ margin: "10px" }}
        onClick={props.loadEditor}
      >
        Szerkesztés
      </button>
      </Nav>
      </Navbar.Collapse>
      {/* eslint-disable-next-line */}
      <span
        role="img"
        style={{ marginLeft: "auto", marginRight: "0", cursor: "pointer" }}
        onClick={props.loadLoginForm}
      >
        🔐
      </span>
    </Navbar>
  );
};

export default Header;
