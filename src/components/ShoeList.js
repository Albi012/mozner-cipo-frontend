import React from 'react';
import ShoeItem from './ShoeItem'

class ShoeList extends React.Component{

      state= {shoeImages : []};

      render(){
        const shoes = this.props.shoes.map(shoe => {
          return <ShoeItem key={shoe.id} name={shoe.name} size={shoe.size} />;
        });
        return (
        <div className="ui grid">
          <div className="three column row">
            {shoes}
          </div>
        </div>
        )
      }
}

export default ShoeList;