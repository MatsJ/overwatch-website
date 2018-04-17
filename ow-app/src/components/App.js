import React, { Component, Fragment } from "react";
import styled from "styled-components";
import sampleHeroes from "../sampleHeroes";
import scrollIntoView from "scroll-into-view";

// components
import Menu from "./Menu";
import Header from "./Header";
import Hero from "./Hero";
import SelectedHero from "./SelectedHero";

const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 170px);
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: center;

  @media only screen and (max-width: 1050px) {
    grid-template-columns: repeat(auto-fit, 170px);
    grid-auto-rows: 220px;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-content: center;
  border-radius: 2px;
  background-color: #fff;
  color: #4f4f4f;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    color: rgba(0, 0, 255, 0.8);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
      0 3px 6px rgba(0, 0, 0, 0.23);
    -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
      0 3px 6px rgba(0, 0, 0, 0.23);
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
  };

  toggleActive = (event, data) => {
    this.setState({ isActive: !this.state.isActive });
    let el = event.currentTarget;
    el.setAttribute("aria-checked", "true");
    // scroll selected hero into view
    scrollIntoView(el, {
      align: {
        top: 0.06
      }
    });

    // hero details
    const role = document.querySelector(".role");
    const description = document.querySelector(".description");
    const diff = document.querySelector(".diff");
    const name = document.querySelector(".name");
    name.textContent = `${data.name}`;
    role.textContent = `Role: ${data.role}`;
    description.textContent = `Description: ${data.description}`;
    diff.textContent = `Difficulty(1-3): ${data.difficulty}`;

    const wrappers = document.querySelectorAll(".herowrap");
    wrappers.forEach(wrappers => {
      wrappers.setAttribute("aria-checked", "false");
    });

    // toggle aria-checked state
    const desc = document.querySelector(".desc");
    if (el.getAttribute("aria-checked") === "true") {
      el.setAttribute("aria-checked", "false");
      // hide div
      desc.style.display = "none";
    } else {
      el.setAttribute("aria-checked", "true");
      // show div
      desc.style.display = "block";
    }
  };

  render() {
    return (
      <Fragment>
        <Header />
        <Menu addHeroes={this.addHeroes} loadHeroes={this.loadHeroes} />
        <Container>
          {Object.keys(this.state.heroes).map(key => (
            <Wrapper
              key={key}
              onClick={event =>
                this.toggleActive(event, this.state.heroes[key])
              }
              aria-checked="false"
              className={`herowrap`}>
              <Hero
                key={key}
                index={key}
                details={this.state.heroes[key]}
                addHeroes={this.addHeroes}
              />
            </Wrapper>
          ))}
        </Container>
        <SelectedHero details={this.state.heroes} />
      </Fragment>
    );
  }
}

export default App;
