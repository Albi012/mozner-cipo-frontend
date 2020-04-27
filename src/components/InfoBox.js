import React from "react";
import mapImg from '../images/map.png'
import { Container } from "react-bootstrap";

class InfoBox extends React.Component {
  render() {
    return (
      <Container
        style={{
          margin: "10px",
          height:"auto",
          weight:'auto',
          backgroundColor: "#b3b3b3",
          borderRadius: "25px",
          padding:'10px'
        }}
      >
        <h2>Elérhetőségek:</h2>
        <p>Mobil: (30) 505 4749</p>
        <p>Cím: Aszód, Kossuth Lajos utca 3.</p>
        <p>
          Facebook oldalunk:{" "}
          <a href="http://facebook.com/moznercipo">
            http://facebook.com/moznercipo
          </a>
        </p>
        <img src={mapImg} alt="map" style={{verticalAlign:"middle",borderRadius:"25px"}}></img>
      </Container>
    );
  }
}

export default InfoBox;
