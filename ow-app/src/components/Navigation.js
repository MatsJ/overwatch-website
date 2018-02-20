import styled, { css } from 'styled-components';
import React, { Component } from 'react';
import { baseColor } from '../App';
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

const StyledLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    border-radius: 2px;
    padding: 6px;
`;

class Navigation extends Component {
    render() {
        const activeStyle = css`
            background-color: white;
            color: ${baseColor};
        `;
        return (
                <Nav>
                    <List>
                        <ListItem>
                            <StyledLink 
                                activeStyle={{ 
                                    color: `rgba(0, 0, 255, 0.8)`, 
                                    backgroundColor: 'white', 
                                    padding: '6px'}} to='/heroes'>HEROES</StyledLink>
                        </ListItem>
                        <ListItem>
                            <StyledLink activeStyle={{ 
                                color: `rgba(0, 0, 255, 0.8)`, 
                                backgroundColor: 'white', 
                                padding: '6px'}} to='/owl'>OWL</StyledLink>
                        </ListItem>
                        <ListItem>
                            <StyledLink activeStyle={{ 
                                color: `rgba(0, 0, 255, 0.8)`, 
                                backgroundColor: 'white', 
                                padding: '6px'}} to='/patchnotes'>PATCHNOTES</StyledLink>
                        </ListItem>
                        <ListItem>
                            <StyledLink activeStyle={{ 
                                color: `rgba(0, 0, 255, 0.8)`, 
                                backgroundColor: 'white', 
                                padding: '6px'}} to='/stats'>STATS</StyledLink>
                        </ListItem>
                    </List>
                </Nav>
        )
    }
}

export default Navigation;