import React from 'react';
import Header from './Header'
import PageContent from './PageContent';

class App extends React.Component{
    state={shoes :[{id:1,name:"test1",size:40},{id:2,name:"test2",size:42},{id:3,name:"test3",size:43},{id:4,name:"test4",size:44}],view:""}

    loadShoes=()=>{
        this.setState({view:"shoes"});
    }

    loadInfo=()=>{
        this.setState({view:"info"});
    }

    render(){
        return <div><Header loadShoes={this.loadShoes} loadInfo={this.loadInfo}/>
            <PageContent shoes={this.state.shoes} view={this.state.view}/>
        </div>
    }
}

export default App;