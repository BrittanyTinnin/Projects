import React, { Component } from "react";
import API from "./API";
import Planet from "./Planet";

const initialState = {
  discoveryYear: "",
  discoveryMethod: "",
  hostName: "",
  discoveryFacility: "",
  searchText: "",
  selection: "",
  errorMessage: "",
  planets: [],
};

//TODO: get reference link to show
//TODO: search by multiple fields (front & back)
//TODO: User can see icons (such as up and down symbols) in the column headers
//TODO: User can click on the up symbol to sort the rows in the results panel in ascending order on the values in that column.
//TODO: User can click on the down symbol to sort the rows in the results panel in descending order on the values in the column.
//TODO: get error to display message

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

 

  handleClear = (e) => {
    this.setState({ state: initialState });
  };

  handleSelect = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    this.setState({ error: "" });
    this.setState({ searchText: "" });
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    if (this.state.selection === "hostName") {
      this.setState((state) => ({
        hostName: state.searchText,
      }));
    } else if (this.state.selection === "discoveryYear") {
      this.setState((state) => ({
        discoveryYear: state.searchText,
      }));
    } else if (this.state.selection === "discoveryFacility") {
      this.setState((state) => ({
        discoveryFacility: state.searchText,
      }));
    } else if (this.state.selection === "discoveryMethod") {
      this.setState((state) => ({
        discoveryMethod: state.searchText,
      }));
    } else {
      this.setState({ error: "provide search selection" });
    }
  };

  validate = () => {
    let searchError = "";
    if (this.state.searchText === "") {
      searchError = "must provide search input";
      this.setState({ error: searchError });
      return false;
    }
    this.setState({ error: "" });
    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const isValid = this.validate();

    if (isValid) {
      API.post("/searchPlanets", {
        hostName: this.state.hostName,
        discoveryYear: this.state.discoveryYear,
        discoveryMethod: this.state.discoveryMethod,
        discoveryFacility: this.state.discoveryFacility,
      })
        .then((res) => {
          let temp = res.data;
          this.setState({ planets: temp });
        })
        .catch((err) => {
          console.log(err.message);
          this.setState({ errorMessage: err.message, planets: [] });
        });
    }
  };

  

  render() {
    let planetDisplay = null;
    if (this.state.planets.length !== 0) {
      planetDisplay = <Planet planets={this.state.planets} />;
    } else {
      planetDisplay = <h3>{this.state.errorMessage}</h3>;
    }
    return (
      <div className="search">
        Search componenet
        <form onSubmit={this.handleSubmit}>
          <div>
            <select
              name="selection"
              value={this.state.selection}
              onChange={this.handleSelect}
            >
              <option></option>
              <option value="discoveryYear">discoveryYear</option>
              <option value="discoveryMethod">discoveryMethod</option>
              <option value="hostName">hostName</option>
              <option value="discoveryFacility">discoveryFacility</option>
            </select>
            <input
              type="text"
              name="searchText"
              placeholder="search"
              value={this.state.searchText}
              onChange={this.handleInput}
            />
          </div>
          <button>search button</button>
        </form>
        <form onSubmit={this.handleClear}>
          <button>clear</button>
        </form>
        <div style={{ color: "red" }}>{this.state.error}</div>
        {planetDisplay}
      </div>
    );
  }
}

export default Search;
