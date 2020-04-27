import React from "react";
import { Card } from "react-bootstrap";
import "../ShoeItem.css";

const ShoeItem = (props) => {
  return (
    <Card >
      <Card.Img
        src={props.imgUrl}
        alt={props.name}
      />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Márka:{props.brand}<br/>
          Méret:{props.size}<br/>
          Ár:{props.price}.Ft<br/>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ShoeItem;
