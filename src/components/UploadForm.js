import React, { Component } from "react";
import * as firebase from "firebase/app";
import "firebase/storage";

class UploadForm extends Component {
  state = { brand: "", name: "", size: "", image: "" };

  handleFileChange = (event) => {
    if (event.target.files[0]) {
      this.setState({
        image: event.target.files[0],
      });
    }
  };

  handleUpload = (event) => {
    event.preventDefault();
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(this.state.image.name).put(this.state.image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {},
      () => {
        storageRef.child(this.state.image.name).getDownloadURL().then(url=>{
            console.log(url)
        })
      }
    );
  };

  handleBrandChange = (event) => {
    this.setState({ brand: event.target.value });
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSizeChange = (event) => {
    this.setState({ size: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleUpload}>
        <div>
          {/* <label>Márka:</label>
                    <input type="text" value={this.state.brand} onChange={this.handleBrandChange}/>
                    <label>Név:</label>
                    <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
                    <label>Méret:</label>
                    <input type="text" value={this.state.size} onChange={this.handleSizeChange}/> */}
          <input type="file" onChange={this.handleFileChange}></input>
          <button type="submit">Upload!</button>
        </div>
      </form>
    );
  }
}

export default UploadForm;
