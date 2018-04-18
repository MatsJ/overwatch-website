import React, { Component, Fragment } from "react";

// components
import Header from "./Header";
import Menu from "./Menu";

class Owl extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Menu />
        <h2>Overwatch League</h2>
      </Fragment>
    );
  }
}

export default Owl;
