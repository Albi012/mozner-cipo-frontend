import React from "react";
import { Card, DropdownButton, Dropdown, Modal, Button } from "react-bootstrap";
import "../ShoeItem.css";

class ShoeItem extends React.Component {
  state = { selectedSize: "", show: false };

  handleSizeSelect = (size) => {
    this.setState({ selectedSize: size });
  };

  handleShow = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    const sizeDropdown = this.props.sizes.map((size) => (
      <Dropdown.Item
        key={size}
        value={size}
        onSelect={() => this.handleSizeSelect({ size })}
      >
        {size}
      </Dropdown.Item>
    ));
    const modal = (
      <div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Rendelés menete:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Választott márkája és száma: {this.props.brand} {this.props.shoeNumber}<br/>
            Választott méret: {Object.values(this.state.selectedSize)}<br/>
            Ár: {this.props.price} Huf(Termék ára) + 2000 Huf(Postaköltség)<br/>
            Összesen: {parseInt(this.props.price)}
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
        <Card.Img src={this.props.url} alt={this.props.shoeNumber} />
        <Card.Body>
          <Card.Title>{this.props.brand}</Card.Title>
          <Card.Text>
            {this.props.shoeNumber}
            <br />
            Ár:{this.props.price}.Ft
            <br />
            <DropdownButton className="btn btn-primary" title="Méretek">
              {sizeDropdown}
            </DropdownButton>
            <Button variant="success" onClick={this.handleShow}>
              Rendelés
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default ShoeItem;
