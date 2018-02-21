import React, { Component } from 'react';
import styled from 'styled-components';

//images
import bg from './img/owbg.png';
import mobilelogo from './img/mobilelogo.svg';
import logo from './img/logo.svg';

// components
import Navigation from './components/Navigation';
import Submenu from './components/Submenu';

const baseColor = 'rgba(0, 0, 255, 0.3)';

const Header = styled.header`
  height: 400px;
  background: url(${bg}) no-repeat;
  background-size: cover;
  box-shadow: inset 0 0 0 1000px ${baseColor};

  @media only screen and (max-width: 700px) {
    height: 220px;
    font-size: 3vw;
  }
`;

const MobileLogo = styled.img`
  display: grid;
  margin: auto;
  margin-top: 20px;
`;

const Headerlogo = styled.img`
    width: 290px;
    margin: 0 auto;
    display: grid;
    margin-bottom: 20px;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }
  
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({width: window.innerWidth});
  }

  render() {
    const { width } = this.state;
    const isMobile = window.innerWidth <= 700;
    if(isMobile) {
      return (
        <div className={this.props.className}>
        <Header>
          <Navigation/>
          <MobileLogo src={mobilelogo}  alt="logo"/>
        </Header>
        <Submenu/>
        <p>Heroes will be displayed here</p>
      </div>
      );
    } else {
      return (
        <div className={this.props.className}>
          <Header>
            <Headerlogo src={logo} alt="Logo"/>
            <Navigation/>
          </Header>
          <Submenu/>
          <p>Heroes will be displayed here</p>
        </div>
      );
    }
  }
}

export default App;
