import React from 'react';
import ShoeItem from './ShoeItem'

const ShoeList = (props) =>{
    const shoes = props.shoes.map(shoe => {
        return <ShoeItem key={shoe.id} name={shoe.name} size={shoe.size} />;
      });
      return <div className="shoe-list">{shoes}</div>;
}

export default ShoeList;