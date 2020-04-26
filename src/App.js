import React from 'react';
import Header from './components/Header'
import PageContent from './components/PageContent';
import headerImg from "./images/header.jpg"
import "./App.css"

class App extends React.Component{
    state={view:""}

    loadShoes=()=>{
        console.log('cipo')
        this.setState({view:"shoes"});
    }

    loadInfo=()=>{
        console.log("info")
        this.setState({view:"info"});
    }

    loadOrder=()=>{
        console.log("order")
        this.setState({view:"order"});
    }

    render(){
        return <div style={{backgroundColor:'grey'}}>
            <img src={headerImg} alt="shoe store" width='100%'/>
            <Header loadShoes={this.loadShoes} loadInfo={this.loadInfo} loadOrder={this.loadOrder}/>
            <PageContent view={this.state.view}/>
        </div>
    }
}

export default App;