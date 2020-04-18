import React from 'react';
import Header from './components/Header'
import PageContent from './components/PageContent';
import moznerHeader from "./images/mozner-header.jpg"
import "./App.css"

class App extends React.Component{
    state={shoes :[{id:1,name:"test1",size:40},{id:2,name:"test2",size:42},{id:3,name:"test3",size:43},{id:4,name:"test4",size:44},{id:5,name:"test4",size:44},{id:6,name:"test4",size:44},{id:7,name:"test4",size:44}],view:""}

    loadShoes=()=>{
        this.setState({view:"shoes"});
    }

    loadInfo=()=>{
        this.setState({view:"info"});
    }

    loadOrder=()=>{
        this.setState({view:"order"});
    }

    render(){
        return <div className="page-container">
            <img className="ui fluid image" src={moznerHeader} alt="shoe store"/>
            <Header loadShoes={this.loadShoes} loadInfo={this.loadInfo} loadOrder={this.loadOrder}/>
            <PageContent shoes={this.state.shoes} view={this.state.view}/>
        </div>
    }
}

export default App;