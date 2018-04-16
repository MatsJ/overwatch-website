import React, { Fragment } from "react";
//import PropTypes from "prop-types";
import styled from "styled-components";
import exit from "../img/exit.svg";

const Wrapper = styled.div`
  background-color: #fff;
  height: 200px;
  width: 100%;
  position: fixed;
  bottom: 0px;
  box-shadow: 0px 0px 0px #888, 0px -5px 5px rgba(0, 0, 0, 0.2);
  display: none;
`;

const Exit = styled.img`
  margin: 10px;
  cursor: pointer;
`;

const Description = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  font-size: 1.2em;
  background-color: pink;
  margin-left: 1em;
  margin-right: 2em;
`;
const Secondary = Description.extend``;

const Difficulty = Description.extend``;

const Role = Description.extend``;

class SelectedHero extends React.Component {
  closeDesc = () => {
    const wrap = document.querySelector(".desc");
    wrap.style.display = "none";
  };
  render() {
    const { name, role, image, description, difficulty } = this.props.details;
    console.log(difficulty);
    return (
      <Fragment>
        <Wrapper className={`desc`}>
          <Exit src={exit} onClick={this.closeDesc} />
          <Role>rrrr</Role>
          <Description>Description</Description>
          <Difficulty>Difficulty</Difficulty>
        </Wrapper>
      </Fragment>
    );
  }
}

export default SelectedHero;
