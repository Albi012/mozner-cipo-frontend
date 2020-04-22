import React from 'react';
import Header from './components/Header'
import PageContent from './components/PageContent';
import headerImg from "./images/header.jpg"
import "./App.css"

class App extends React.Component{
    state={shoes :[{id:1,name:"test1",size:40,price:"10 000HUF"},{id:2,name:"test2",size:42,price:"10 000HUF"},{id:3,name:"test3",size:43,price:"10 000HUF"},{id:4,name:"test4",size:44,price:"10 000HUF"}],view:""}

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
            {/* <PageContent shoes={this.state.shoes} view={this.state.view}/> */}
        </div>
    }
}

export default App;