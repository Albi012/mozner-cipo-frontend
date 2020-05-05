import React from "react";
import { Card } from "react-bootstrap";
import "../ShoeItem.css";

class ShoeItem extends React.Component {
  render() {
    return (
      <Card>
        <Card.Img src={this.props.url} alt={this.props.shoeNumber} />
        <Card.Body>
          <Card.Title>{this.props.brand}</Card.Title>
          <Card.Text>
            {this.props.shoeNumber}
            <br />
            Ár:{this.props.price}.Ft
            <br />
            Méretek: {this.props.size}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default ShoeItem;
