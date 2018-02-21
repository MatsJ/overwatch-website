import styled, { css } from 'styled-components';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import App from '../App';


export const Nav = styled.div`
    color: #fff;    
    margin: 0px;
`;

const List = styled.ul`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
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
    background-color: rgba(231, 81, 73, .17);
    transition: .5s ease;
  }
`

const StyledLink = StyledNavLink.extend`
    color: #4F4F4F;
    cursor: pointer;
    font-weight: 600;
    font-style: italic;
    padding: 8px;
    border-radius: 2px;
    text-decoration: none;

    @media only screen and (max-width: 700px) {
        font-size: 1em;
    }
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