import React from 'react';
import styled from 'styled-components';
//images
import bg from '../img/owbg.jpg';
import logo from '../img/logo.svg';

const baseColor = 'rgba(0, 0, 255, 0.3)';

const HeaderBox = styled.header`
  height: 400px;
  background: url(${bg}) no-repeat;
  background-size: cover;
  box-shadow: inset 0 0 0 1000px ${baseColor};

  @media only screen and (max-width: 700px) {
    height: 200px;
    font-size: 3vw;
    display: flex;
  }
`;

const Headerlogo = styled.img`
    width: 290px;
    margin: 0 auto;
    display: grid;
    margin-bottom: 20px;

    @media only screen and (max-width: 700px) {
      width: 230px;
  }
`;

const Header = () => (
    <HeaderBox>
        <Headerlogo src={logo} alt="Logo"/>
    </HeaderBox>
);

export default Header;

