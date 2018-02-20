import React, { Component } from 'react';
import bg from './img/owbg.png';
import mobilelogo from './img/mobilelogo.png';
import styled from 'styled-components';

import Navigation from './components/Header';

const baseColor = 'rgba(0, 0, 255, 0.3)';

const Header = styled.header`
  height: 550px;
  background: url(${bg}) no-repeat;
  background-size: cover;
  box-shadow: inset 0 0 0 1000px ${baseColor};

  @media only screen and (max-width: 700px) {
    height: 220px;
  }
`;

const MobileLogo = styled.img`
  display: grid;
  margin: auto;
`;


class App extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <Header>
          <Navigation/>
          <MobileLogo src={mobilelogo}  alt="logo"/>
        </Header>
      </div>
    );
  }
}

export default App;
