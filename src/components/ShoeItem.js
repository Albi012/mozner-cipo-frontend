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
          Ár:{props.price}<br/>
          Raktáron:{props.quantity}<br/>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ShoeItem;
