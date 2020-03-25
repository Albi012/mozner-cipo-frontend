import React from 'react';
import Header from './Header'
import ShoeList from './ShoeList';

class App extends React.Component{
    state={shoes :[{id:1,name:"test1",size:40},{id:2,name:"test2",size:42},{id:3,name:"test3",size:43},{id:4,name:"test4",size:44}]}


    render(){
        return (
            <div>
                <Header/>
                <ShoeList shoes={this.state.shoes}/>
            </div>
        )
        
    }
}

export default App;