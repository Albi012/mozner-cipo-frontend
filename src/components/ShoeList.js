import React from "react";
import { Row, Col ,Container} from "react-bootstrap";
import ShoeItem from "./ShoeItem";

class ShoeList extends React.Component {

  render() {
    let rowContents = [];
    const contents = this.props.shoes.reduce((acc, shoe, i) => {
      rowContents.push(
        <Col key={i} className="col col-md-3" style={{ width: '10rem',margin:'20px' }}>
          <ShoeItem
            key={shoe.id}
            id={shoe.id}
            shoeNumber={shoe.shoeNumber}
            url={shoe.url}
            brand={shoe.brand}
            price={shoe.price}
          />
        </Col>
      );
      if (i % 3 === 2) {
        acc.push(<Row className="justify-content-md-center" style={{margin:'10px'}}>{rowContents}</Row>);
        rowContents = [];
      }
      return acc;
    }, []);
    contents.push(<Row className="justify-content-md-center" style={{margin:'10px'}}>{rowContents}</Row>);

    return <Container fluid style={{margin:'10px',backgroundColor:'#b3b3b3',borderRadius:'25px'}}> {contents}</Container>;
  }
}

export default ShoeList;
