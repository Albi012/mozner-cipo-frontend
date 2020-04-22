import React from "react";
import { Navbar,Nav } from "react-bootstrap";

const Header = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand className="justify-content-between">Mózner Cipőbolt</Navbar.Brand>
      <button className="btn btn-primary" style={{margin:'5px'}} onClick={props.loadShoes}>Cipők</button>
      <button className="btn btn-primary" style={{margin:'5px'}} onClick={props.loadInfo}>Rólunk</button>
      <button className="btn btn-primary" style={{margin:'5px'}} onClick={props.loadOrder}>Rendelés</button>
    </Navbar>
  );
};

export default Header;
