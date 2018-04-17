import React, { Fragment } from "react";
//import PropTypes from "prop-types";
import styled from "styled-components";
import exit from "../img/exit.svg";

const Wrapper = styled.div`
  background-color: #fff;
  max-height: 350px;
  width: 100%;
  position: fixed;
  bottom: 0px;
  box-shadow: 0px 0px 0px #888, 0px -5px 5px rgba(0, 0, 0, 0.2);
  display: none;
  overflow-y: scroll;
`;

const Exit = styled.img`
  margin: 10px;
  cursor: pointer;
`;

const Description = styled.p`
  font-family: "Roboto";
  font-weight: 500;
  font-style: normal;
  font-size: 1em;
  background-color: #fff;
  padding: 4px;
  line-height: 1.5;
  border-radius: 2px;
  margin-left: 1em;
  margin-right: 2em;
`;

const Difficulty = Description.extend``;

const Role = Description.extend``;

const Name = Description.extend`
  font-family: "open sans", "sans-serif";
  font-size: 1.2em;
  color: rgba(0, 0, 255, 0.8);
`;

class SelectedHero extends React.Component {
  closeDesc = () => {
    const wrap = document.querySelector(".desc");
    wrap.style.display = "none";
  };
  render() {
    return (
      <Fragment>
        <Wrapper className={`desc`}>
          <Exit src={exit} onClick={this.closeDesc} />
          <Name className={`name`} />
          <Role className={`role`} />
          <Description className={`description`} />
          <Difficulty className={`diff`} />
        </Wrapper>
      </Fragment>
    );
  }
}

export default SelectedHero;
