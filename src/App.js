import React from "react";
import Header from "./components/Header";
import PageContent from "./components/PageContent";
import headerImg from "./images/header.jpg";
import "./App.css";
//import firebaseApp from "./config/FireConfig";

class App extends React.Component {
  state = { view: "", user: null, brand: "", category: "" };

  onSelectBrandAndCategory = (brandValue, categoryValue) => {
    this.setState({
      brand: brandValue,
      category: categoryValue,
      view:"shoes"
    });
  };

  loadInfo = () => {
    this.setState({ view: "info" });
  };
  // firebaseApp.auth().onAuthStateChanged((user) => {
  //   console.log(user);
  // });
  // var currentUser = firebaseApp.auth().currentUser
  // if (currentUser != null) {
  //   this.setState({user:currentUser});
  //   console.log(currentUser)
  // } else {
  //   this.setState({user:null});
  // }
  loadEditor = () => {
    this.setState({ view: "edit" });
  };

  loadLoginForm = () => {
    this.setState({ view: "login" });
  };

  loadUploadForm = () => {
    this.setState({ view: "upload" });
  };

  componentDidMount() {
    // firebaseApp.auth().onAuthStateChanged((user) => {
    //   console.log(user);
    // });
    // var currentUser = firebaseApp.auth().currentUser
    // if (currentUser != null) {
    //   this.setState({user:currentUser});
    //   console.log(currentUser)
    // } else {
    //   this.setState({user:null});
    // }
  }

  render() {
    return (
      <div style={{ backgroundColor: "grey" }}>
        <img src={headerImg} alt="shoe store" width="100%" />
        <Header
          user={this.state.user}
          onSelectBrandAndCategory={this.onSelectBrandAndCategory}
          loadInfo={this.loadInfo}
          loadOrder={this.loadOrder}
          loadUploadForm={this.loadUploadForm}
          loadLoginForm={this.loadLoginForm}
          loadEditor={this.loadEditor}
        />
        <PageContent view={this.state.view} category={this.state.category} brand={this.state.brand}/>
      </div>
    );
  }
}

export default App;
