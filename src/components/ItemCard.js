import React from "react";
import { Card } from "react-bootstrap";

class ItemCard extends React.Component {
  render() {
    return (
      <Card>
        <Card.Img src={this.props.url} alt={this.props.name} />
        <Card.Body>
          <Card.Text>
            {this.props.name}
            <br />
            Ár:{this.props.price}.Ft
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default ItemCard;
