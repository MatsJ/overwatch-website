import React, { Component, Fragment } from "react";

// components
import Header from "./Header";
import Menu from "./Menu";

class Patchnotes extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Menu />
        <h2>Patchnotes</h2>
      </Fragment>
    );
  }
}

export default Patchnotes;
