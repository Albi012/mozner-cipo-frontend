import React from "react";
import Header from "./components/Header";
import PageContent from "./components/PageContent";
import headerImg from "./images/header.jpg";
import "./App.css";
//import firebaseApp from "./config/FireConfig";

class App extends React.Component {
  state = { view: "", user: null, shoes: [],items:[] };

  setShoes = (shoesData) => {
    this.setState({ shoes: shoesData, view: "shoes"});
  };

  setOnSaleShoes=(shoesData)=>{
    this.setState({shoes:shoesData,view:"onSale"})
  }

  setItems=(itemData)=>{
    this.setState({items:itemData})
    this.loadAccessories();
  }

  loadInfo = () => {
    this.setState({ view: "info" });
  };

  loadAccessories = () => {
    this.setState({ view: "accessories"});
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

  render() {
    return (
      <div style={{ backgroundColor: "grey" }}>
        <img src={headerImg} alt="shoe store" width="100%" />
        <Header
          setOnSaleShoes={this.setOnSaleShoes}
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
