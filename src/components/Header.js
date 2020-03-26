import React from 'react';

const Header = (props) =>{
    return (
            <div className="ui three item menu">
                <button onClick={props.loadShoes} className="ui button item">Cipők</button>
                <button onClick={props.loadInfo} className="ui button item">Rólunk</button>
                <button onClick={props.loadOrder} className="ui button item">Rendelés</button>
        </div>
    )
}

export default Header;