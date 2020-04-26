import React from "react";
import { Card } from "react-bootstrap";
import "../ShoeItem.css";

const ShoeItem = (props) => {
  return (
    <Card >
      <Card.Img
        src={props.imgUrl}
        alt="123"
      />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Méret:{props.size}<br/>
          Raktáron:{props.quantity}
          Ár:{props.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ShoeItem;
