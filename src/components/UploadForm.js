import React, { Component } from "react";
import axios from "axios";
import * as firebase from "firebase/app";
import "firebase/storage";

class UploadForm extends Component {
  state = { brand: "", name: "", size: "", image: "", price: "" };

  handleFileChange = (event) => {
    if (event.target.files[0]) {
      this.setState({
        image: event.target.files[0],
      });
    }
  };

  handleUpload = (event) => {
    event.preventDefault();
    var headers = {
      "Content-Type": "application/json",
    };
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef
      .child(this.state.image.name)
      .put(this.state.image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {},
      () => {
        storageRef
          .child(this.state.image.name)
          .getDownloadURL()
          .then((url) => {
            axios
              .post(`http://localhost:8080/save-new-shoe/`, {
                brand: this.state.brand,
                name: this.state.name,
                price: this.state.price,
                size: this.state.size,
                url: url,
              },headers)
              .then((res) => {
                console.log(res);
              });
          });
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

  handlePriceChange = (event) => {
    this.setState({ price: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleUpload}>
        <div>
          <label>Márka:</label>
          <input
            type="text"
            value={this.state.brand}
            onChange={this.handleBrandChange}
          />
          <label>Név:</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <label>Méret:</label>
          <input
            type="text"
            value={this.state.size}
            onChange={this.handleSizeChange}
          />
          <label>Ár:</label>
          <input
            type="text"
            value={this.state.price}
            onChange={this.handlePriceChange}
          />
          <input type="file" onChange={this.handleFileChange}></input>
          <button type="submit">Upload!</button>
        </div>
      </form>
    );
  }
}

export default UploadForm;
