import React, { Component } from 'react'
import axios from 'axios';
import ShoeEditItem from './ShoeEditItem';

class ShoeEditList extends Component {

    state={shoes:[]}

    componentDidMount() {
        axios.get(`http://localhost:8080/shoes/`)
          .then(res => {
            const shoesData = res.data;
            this.setState({ shoes : shoesData });
          })
      }

    render() {

        const shoeEditItemList = this.state.shoes.map((shoe,i) => <ShoeEditItem imgUrl={shoe.url} name={shoe.name} brand={shoe.brand} />)

        return(
            <div>
                {shoeEditItemList}
            </div>
        )
    }
}

export default ShoeEditList
