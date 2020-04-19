import React from 'react';
import ShoeItem from './ShoeItem'

class ShoeList extends React.Component{

      state= {shoeImages : []};

      render(){
        const shoes = this.props.shoes.map(shoe => {
          return <ShoeItem key={shoe.id} id={shoe.id} name={shoe.name} size={shoe.size} price={shoe.price} />;
        });
        return (
        <div className="ui grid" style={{margin : "auto",width:"80%", padding:"5px"}}>
          <div className="ui links cards three column row" style={{backgroundColor:"white",borderRadius:"25px"}}>
            {shoes}
          </div>
        </div>
        )
      }
}

export default ShoeList;