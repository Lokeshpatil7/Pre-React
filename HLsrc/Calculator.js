import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Calculator extends Component {
  render() {
    return (
      <>
        <h2>Calculator</h2>
        <p></p>
        <Link className="" to={"/"}>
          <button>
            <h2>calci</h2>
          </button>
        </Link>
        <br />
      </>
    );
  }
}
