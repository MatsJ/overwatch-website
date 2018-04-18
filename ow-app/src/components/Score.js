import React, { Component, Fragment } from "react";
import styled from "styled-components";
import dynasty from "../img/dynasty.png";
import excel from "../img/excel.png";

const Div = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
  padding: 10px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-content: center;
  cursor: pointer;

  &:hover {
    color: rgba(0, 0, 255, 0.8);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
      0 3px 6px rgba(0, 0, 0, 0.23);
    -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
      0 3px 6px rgba(0, 0, 0, 0.23);
    transform: scale(1.02);
  }
`;

const Score = styled.span`
  font-size: 1.4em;
  align-self: center;
  color: ${props => props.theme.fg};
  font-weight: ${props => props.theme.bold};
`;

const theme = {
  fg: "blue",
  bold: "800"
};

const loose = {
  fg: "black",
  bold: "300"
};

const TeamLogo = styled.img`
  height: 100px;
  width: 100px;
`;

class TheScore extends Component {
  render() {
    return (
      <Fragment>
        <Div>
          <TeamLogo src={dynasty} /> <Score theme={loose}>2</Score>{" "}
          <Score theme={theme}>3</Score> <TeamLogo src={excel} />
        </Div>
      </Fragment>
    );
  }
}

export default TheScore;
