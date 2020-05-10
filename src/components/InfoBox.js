import React from "react";
import mapImg from "../images/map.png";
import { Container } from "react-bootstrap";

class InfoBox extends React.Component {
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
        <h2>
          <b>Elérhetőségek:</b>
        </h2>
        <p>
          <b>Mobil: (30) 505 4749</b>
        </p>
        <p>
          <b>Cím: Aszód, Kossuth Lajos utca 5.</b>
        </p>
        <p>
          <b>
            Facebook oldalunk:
            <a href="http://facebook.com/moznercipo">
              http://facebook.com/moznercipo
            </a>
          </b>
        </p>
        <h3>Rólunk:</h3><br/>
        <b>1994 óta müködő cipőbolt Aszódon.<br/> 
        Prémium minőségű cipők eladásával foglalkozunk már több mint 26 éve.<br/>
        Nyugodtan keresseneknek telefonon vagy facebook oldalunkon </b>
        <img
          src={mapImg}
          alt="map"
          style={{ verticalAlign: "middle", borderRadius: "25px" }}
        ></img>
      </Container>
    );
  }
}

export default InfoBox;
