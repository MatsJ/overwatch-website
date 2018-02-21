import React, { Component } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const StyledMenu = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr;
    grid-template-rows: 50px;
    background-color: #FFFFFF;
    font-size: 0.8em;
    margin: auto;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.37);
    -moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.37);
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.37);
    padding: 4px;
`;

const SubMenu = () => {
    return (
        <StyledMenu>
            <Navigation />
        </StyledMenu>
    )
}

export default SubMenu;