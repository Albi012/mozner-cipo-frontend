import React from "react";
import Header from "./components/Header";
import PageContent from "./components/PageContent";
import headerImg from "./images/header.jpg";
import "./App.css";
//import firebaseApp from "./config/FireConfig";

class App extends React.Component {
  state = { view: "", user: null, shoes: [] };

  setShoes = (shoesData) => {
    this.setState({ shoes: shoesData, view: "shoes",items:[]});
  };
  setItems=(itemData,category)=>{
    this.setState({items:itemData,view:category})
  }

  loadInfo = () => {
    this.setState({ view: "info" });
  };
  loadBags = () => {
    this.setState({ view: "bag"});
  };
  loadAccessories = () => {
    this.setState({ view: "accessories"});
  };
  loadMasks = () => {
    this.setState({ view: "mask" });
  };

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
          setShoes={this.setShoes}
          user={this.state.user}
          setItems={this.setItems}          
          loadInfo={this.loadInfo}
          loadOrder={this.loadOrder}
          loadUploadForm={this.loadUploadForm}
          loadLoginForm={this.loadLoginForm}
          loadEditor={this.loadEditor}
          loadAccessories={this.loadAccessories}
          loadBags={this.loadBags}
          loadMasks={this.loadMasks}
        />
        <PageContent view={this.state.view} shoes={this.state.shoes} items={this.state.items}/>
      </div>
    );
  }
}

export default App;
