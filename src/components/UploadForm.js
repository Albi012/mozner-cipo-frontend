import React, { Component } from 'react'

class UploadForm extends Component {

    state = {brand:'',name:'',size:''}

    handleBrandChange=(event)=>{
        this.setState({brand : event.target.value})
    }

    handleNameChange=(event)=>{
        this.setState({name : event.target.value})
    }

    handleSizeChange=(event)=>{
        this.setState({size : event.target.value})
    }

    render() {
        return (
            <form>
                <div>
                    <label>Márka:</label>
                    <input type="text" value={this.state.brand} onChange={this.handleBrandChange}/>
                    <label>Név:</label>
                    <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
                    <label>Méret:</label>
                    <input type="text" value={this.state.size} onChange={this.handleSizeChange}/>
                    <input type="file" ></input>
                </div>
            </form>
        )
    }
}

export default UploadForm
