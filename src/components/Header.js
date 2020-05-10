import React from "react";
import axios from "axios";
import { Navbar, Nav, DropdownButton, Dropdown } from "react-bootstrap";

class Header extends React.Component {
  state = { shoes: null, menBrands: [], womenBrands: [], childBrands: [] ,user:false};
  componentDidMount() {
    if (this.state.shoes === null) {
      var url = `http://localhost:8080/shoes/`;
      axios.get(url).then((res) => {
        this.props.setShoes(res.data);
      });
    }
    axios.get(`http://localhost:8080/brands/men`).then((res) => {
      this.setState({ menBrands: res.data });
    });
    axios.get(`http://localhost:8080/brands/women`).then((res) => {
      this.setState({ womenBrands: res.data });
    });
    axios.get(`http://localhost:8080/brands/child`).then((res) => {
      this.setState({ childBrands: res.data });
    });
    if (localStorage.getItem("user") !== null && localStorage.getItem("user") !== "null") {
      console.log(localStorage.getItem("user"));
      this.setState({ user: true });
    } else {
      this.setState({ user: false });
    }
  }

  handleShoeCategorySelect = (brand, category) => {
    var url = `http://localhost:8080/shoes/${brand}/${category}`;
    axios.get(url).then((res) => {
      this.props.setShoes(res.data);
    });
  };

  handleOnSaleSelect=()=>{
    var url = `http://localhost:8080/shoes/on-sale`
    axios.get(url).then((res) => {
      this.props.setOnSaleShoes(res.data);
    });
  }

  handleAccessoriesSelect = (event) => {
    var url = `http://localhost:8080/items/`;
    axios.get(url).then((res) => {
      this.props.setItems(res.data);
    });
  };

  render() {
    return (
      <Navbar expand="lg" bg="dark" variant="dark" sticky="bottom">
        <Navbar.Brand className="justify-content-between">
          <h3>Mózner cipőbolt</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <DropdownButton className="btn btn-primary" title="Férfi">
              {this.state.menBrands.map((brand) => (
                <Dropdown.Item
                  onSelect={() => this.handleShoeCategorySelect(brand, "men")}
                >
                  {brand}
                </Dropdown.Item>
              ))}
            </DropdownButton>
            <DropdownButton className="btn btn-primary" title="Női">
              {this.state.womenBrands.map((brand) => (
                <Dropdown.Item
                  onSelect={() => this.handleShoeCategorySelect(brand, "women")}
                >
                  {brand}
                </Dropdown.Item>
              ))}
            </DropdownButton>
            <DropdownButton className="btn btn-primary" title="Gyerek">
              {this.state.childBrands.map((brand) => (
                <Dropdown.Item
                  onSelect={() => this.handleShoeCategorySelect(brand, "child")}
                >
                  {brand}
                </Dropdown.Item>
              ))}
            </DropdownButton>
            <button
              className="btn btn-primary"
              style={{ margin: "10px" }}
              value="onSale"
              onClick={this.handleOnSaleSelect}
            >
              Akciók
            </button>
            <button
              className="btn btn-primary"
              style={{ margin: "10px" }}
              value="accessories"
              onClick={this.handleAccessoriesSelect}
            >
              Kiegészítők
            </button>
            <button
              className="btn btn-primary"
              style={{ margin: "10px" }}
              onClick={this.props.loadInfo}
            >
              Rólunk
            </button>
            {this.state.user === true ? (
              <p>
                <button
                  className="btn btn-primary"
                  style={{ margin: "10px" }}
                  onClick={this.props.loadUploadForm}
                >
                  Feltöltés
                </button>
                <button
                  className="btn btn-primary"
                  style={{ margin: "10px" }}
                  onClick={this.props.loadEditor}
                >
                  Szerkesztés
                </button>
              </p>
            ) : (
              <p></p>
            )}
          </Nav>
        </Navbar.Collapse>
        {/* eslint-disable-next-line */}
        <span
          role="img"
          style={{ marginLeft: "auto", marginRight: "0", cursor: "pointer" }}
          onClick={this.props.loadLoginForm}
        >
          🔐
        </span>
      </Navbar>
    );
  }
}

export default Header;
