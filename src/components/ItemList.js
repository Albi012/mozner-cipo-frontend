import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ItemCard from "./ItemCard";

class ItemList extends React.Component {
  render() {
    let rowContents = [];
    const contents = this.props.items.reduce((acc, item, i) => {
      rowContents.push(
        <Col
          key={i}
          className="col col-md-3"
          style={{ width: "10rem", margin: "20px" }}
        >
          <ItemCard
            key={item.id}
            id={item.id}
            name={item.name}
            url={item.url}
            price={item.price}
          />
        </Col>
      );
      if (i % 3 === 2) {
        acc.push(
          <Row className="justify-content-md-center" style={{ margin: "10px" }}>
            {rowContents}
          </Row>
        );
        rowContents = [];
      }
      return acc;
    }, []);
    contents.push(
      <Row className="justify-content-md-center" style={{ margin: "10px" }}>
        {rowContents}
      </Row>
    );

    return (
      <Container
        fluid
        style={{
          margin: "10px",
          backgroundColor: "#b3b3b3",
          borderRadius: "25px",
        }}
      >
        {contents}
      </Container>
    );
  }
}

export default ItemList;
