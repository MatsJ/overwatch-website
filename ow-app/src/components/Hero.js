import React, { Fragment } from "react";
//import PropTypes from "prop-types";
import styled from "styled-components";

const HeroImage = styled.img`
  width: 70px;
  height: 116px;
  transition: ease 0.5s;
  display: grid;
  justify-self: center;
`;

const HeroName = styled.p`
  font-family: "Open Sans", sans-serif;
  text-align: center;
  font-weight: 800;
  font-size: 1.2em;
`;
const HeroRole = HeroName.extend`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  margin-top: 0px;
  font-size: 1em;
`;

class Hero extends React.Component {
  render() {
    const { name, role, image } = this.props.details;
    return (
      <Fragment>
        <HeroImage src={image} alt={name} />
        <HeroName>{name}</HeroName>
        <HeroRole>{role}</HeroRole>
      </Fragment>
    );
  }
}

export default Hero;
