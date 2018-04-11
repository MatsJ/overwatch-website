import React, { Component, Fragment } from "react";
import styled from "styled-components";
import sampleHeroes from "../sampleHeroes";

// components
import Menu from "./Menu";
import Header from "./Header";
import Hero from "./Hero";

const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 200px);
  grid-auto-rows: 220px;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: center;

  @media only screen and (max-width: 1050px) {
    grid-template-columns: repeat(auto-fit, 170px);
    grid-auto-rows: 220px;
  }
`;

const Herowrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-content: center;
  background-color: #fff;
  border-radius: 2px;
  color: #4f4f4f;
  cursor: pointer;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    color: rgba(0, 0, 255, 0.8);
    transform: scale(1.05);
  }
`;

class App extends Component {
  state = {
    heroes: {}
  };

  componentWillMount = () => {
    this.loadHeroes();
  };

  loadHeroes = () => {
    this.setState({ heroes: sampleHeroes });
  };

  addHeroes = hero => {
    // take copy of state
    const heroes = { ...this.state.heroes };

    // add new heroes
    heroes[`hero${Date.now()}`] = hero;

    // set new state
    this.setState({ heroes });
    console.log(this.state.heroes);
  };

  render() {
    return (
      <Fragment>
        <Header />
        <Menu addHeroes={this.addHeroes} loadHeroes={this.loadHeroes} />
        <Container>
          {Object.keys(this.state.heroes).map(key => (
            <Herowrapper key={key}>
              <Hero
                key={key}
                index={key}
                details={this.state.heroes[key]}
                addHeroes={this.addHeroes}
              />
            </Herowrapper>
          ))}
        </Container>
      </Fragment>
    );
  }
}

export default App;
