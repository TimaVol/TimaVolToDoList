import React, { Component } from "react";
import "./Output.css";

export default class Output extends Component {
  render() {
    return (
      <div className="output">
        {this.props.data.map((e, i) => {
          console.log(this.props.data.length);
          if (this.props.data.length > 0) {
            return (
              <p
                className="items"
                key={i}
                onClick={({ target }) => {
                  target.classList.toggle("itemsActive");
                }}
              >
                {e}
              </p>
            );
          }
        })}
      </div>
    );
  }
}
