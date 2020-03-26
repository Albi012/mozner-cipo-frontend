import React from 'react';

const Header = (props) =>{
    return (
        <div className="ui segment">
            <div className="ui three item menu">
                <button onClick={props.loadShoes} className="item">Cipők</button>
                <button onClick={props.loadInfo} className="item">Rólunk</button>
                <button className="item">Rendelés</button>
        </div>
      </div>
    )
}

export default Header;