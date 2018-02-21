import styled, { css } from 'styled-components';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import App from '../App';


const Nav = styled.div`
    color: #fff;
    display: grid;
    margin: 0px;
`;

const List = styled.ul`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 50px;
    align-items: center;
    justify-items: center;
    -webkit-padding-start: 0px;
    -moz-padding-start: 0px;
    cursor: pointer;
    margin: auto;
`;

const ListItem = styled.li`
    list-style-type: none;
`;

const activeClassName = 'active';

const StyledNavLink = styled(NavLink).attrs({
  activeClassName: activeClassName,
})`
  &.${activeClassName} {
    color: rgba(0, 0, 255, 0.8); 
    background-color: white;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.37);
    -moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.37);
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.37);
    transition: .5s ease;
  }
`

const StyledLink = StyledNavLink.extend`
    color: white;
    text-decoration: none;
    border-radius: 2px;
    padding: 8px;
`;

class Navigation extends Component {
    render() {
        return (
                <Nav>
                    <List>
                        <ListItem>
                            <StyledLink to='/heroes'>HEROES</StyledLink>
                        </ListItem>
                        <ListItem>
                            <StyledLink to='/owl'>OWL</StyledLink>
                        </ListItem>
                        <ListItem>
                            <StyledLink to='/patchnotes'>PATCHNOTES</StyledLink>
                        </ListItem>
                        <ListItem>
                            <StyledLink to='/stats'>STATS</StyledLink>
                        </ListItem>
                    </List>
                </Nav>
        )
    }
}

export default Navigation;