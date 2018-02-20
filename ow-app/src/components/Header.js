import React from 'react';
import styled, { css } from 'styled-components';
import logo from '../img/logo.png';

const Nav = styled.div`
    color: #fff;
    display: grid;
`;

const List = styled.ul`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(5, minmax(auto, 1fr));
    grid-template-rows: 50px;
    align-items: center;
    justify-items: center;
    -webkit-padding-start: 25px;
`;

const ListItem = styled.li`
    list-style-type: none;
    font-size: 1.2 vw; 
`;

const Headerlogo = styled.img`
    width: 200px;

    @media only screen and (max-width: 700px) {
        display: none;
    }
`;

const Navigation = (props) => {
    return(
        <Nav>
            <List>
                <Headerlogo src={logo} alt="Logo"/>
                <ListItem>HEROES</ListItem>
                <ListItem>OWL</ListItem>
                <ListItem>PATCHNOTES</ListItem>
                <ListItem>STATS</ListItem>
            </List>
            
        </Nav>
    )
}

export default Navigation;