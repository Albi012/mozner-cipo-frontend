import React from "react";
import { Card, Modal, Button } from "react-bootstrap";

class ItemCard extends React.Component {
  state = { show: false };

  handleShow = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  render() {
    const modal = (
      <div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Rendelés menete:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Választott termék neve: {this.props.name}
            <br />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Bezárás
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
    return (
      <Card className="text-center">
        {modal}
        <Card.Img src={this.props.url} alt={this.props.name} />
        <Card.Body>
          <Card.Text>
            {this.props.name}
            <br />
            Ár:{this.props.price}.Ft
            <br />
            <Button variant="success" onClick={this.handleShow}>
              Rendelés
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default ItemCard;
