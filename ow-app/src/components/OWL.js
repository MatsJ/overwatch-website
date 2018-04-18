import React, { Component, Fragment } from "react";
import styled from "styled-components";

// components
import Header from "./Header";
import Menu from "./Menu";
import TheScore from "./Score";

const Heading = styled.h3`
  font-family: "Open Sans", sans-serif;
  font-weight: 800;
  margin-left: 0.8em;
  font-size: 1em;
  font-weight: 500;
  color: dark grey;
`;

class Owl extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Menu />
        <Heading>Latest results</Heading>
        <TheScore />
      </Fragment>
    );
  }
}

export default Owl;
