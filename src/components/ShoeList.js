import React from "react";
import { Row, Col ,Container} from "react-bootstrap";
import ShoeItem from "./ShoeItem";
import axios from 'axios';

class ShoeList extends React.Component {
  state = {shoes:[]};

  componentDidMount() {
    axios.get(`http://localhost:8080/shoes/`)
      .then(res => {
        const shoesData = res.data;
        this.setState({ shoes : shoesData });
      })
  }

  render() {
    let rowContents = [];
    const contents = this.state.shoes.reduce((acc, shoe, i) => {
      rowContents.push(
        <Col key={shoe.id} className="col col-md-3" style={{ width: '10rem',margin:'20px' }}>
          <ShoeItem
            key={shoe.id}
            id={shoe.id}
            name={shoe.name}
            size={shoe.size}
            price={shoe.price}
            brand={shoe.brand}
            imgUrl={shoe.url}
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
