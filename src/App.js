import React, { Component } from "react";
import "./App.css";
import Output from "./components/Output";

export default class App extends Component {
  state = {
    value: "",
    data: [],
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleClick = () => {
    if (this.state.value == "") {
      alert("input empty");
    } else {
      this.state.data.push(this.state.value);
      this.setState({
        data: this.state.data,
      });
    }
  };

  render() {
    return (
      <div className="box">
        <h1>Batman`s To-Do List</h1>
        <div className="addItem">
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Add new item"
          />
          <input onClick={this.handleClick} type="button" value="+" />
        </div>

        <Output data={this.state.data} />
      </div>
    );
  }
}
