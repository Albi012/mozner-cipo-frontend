import React from "react";
import { Card } from "react-bootstrap";
import "../ShoeItem.css";

const ShoeItem = (props) => {
  return (
    <Card >
      <Card.Img
        src={require(`../images/image${props.id}.jpg`)}
        alt="123"
      />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Méret:{props.size}<br/>
          Ár:{props.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ShoeItem;
