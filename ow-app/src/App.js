import React, { Component } from 'react';
import bg from './img/owbg.png';
import styled from 'styled-components';

const baseColor = 'rgba(0, 0, 255, 0.3)';

const Header = styled.header`
  height: 400px;
  background: url(${bg}) no-repeat;
  background-size: cover;
  box-shadow: inset 0 0 0 1000px ${baseColor};
`;


class App extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <Header />
      </div>
    );
  }
}

export default App;
