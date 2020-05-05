import React from "react";
import { Row, Col ,Container} from "react-bootstrap";
import ShoeItem from "./ShoeItem";
import axios from 'axios';

export default class ShoeList extends React.Component {
  state = {shoes:[]};

  componentDidMount() {
    const url="http://localhost:8080/shoes/"+ this.props.brand+"/"+this.props.category
    axios.get(url)
      .then(res => {
        console.log(res.data)
        this.setState({ shoes : res.data });
      })
  }

  render() {
    let rowContents = [];
    let contents = this.state.shoes.reduce((acc, shoe, i) => {
      rowContents.push(
        <Col key={shoe.id} className="col col-md-3" style={{ width: '10rem',margin:'20px' }}>
          <ShoeItem
            key={shoe.id}
            shoeNumber={shoe.shoeNumber}
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
    console.log(contents)
    return <Container fluid style={{margin:'10px',backgroundColor:'#b3b3b3',borderRadius:'25px'}}> {contents}</Container>;
  }
}