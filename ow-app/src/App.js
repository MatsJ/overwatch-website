import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

//images
import bg from './img/owbg.jpg';
import logo from './img/logo.svg';

// components
import Submenu from './components/Submenu';
import Heroes from './components/Heroes';
import NotFound from './components/NotFound';

const baseColor = 'rgba(0, 0, 255, 0.3)';

const Header = styled.header`
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

class App extends Component {
  render() {
      return (
        <div className={this.props.className}>
          <Header>
            <Headerlogo src={logo} alt="Logo"/>
          </Header>
          <Submenu/>
          <Switch>
              <Route exact path='/heroes' component={Heroes} />
              <Route path='/owl' component={NotFound} />
          </Switch>
        </div>
      );
    }
  }

export default App;
