import React, { Component } from 'react';
import styled from 'styled-components';

const StyledMenu = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 50px;
    align-items: center;
    justify-items: center;
    background-color: #FFFFFF;
    font-size: 0.8em;
    margin: auto;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.37);
    -moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.37);
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.37);
    padding: 4px;
`;

const StyledItems = styled.div`
    color: #4F4F4F;
    cursor: pointer;
    font-weight: 600;
    font-style: italic;
    padding: 8px;
    border-radius: 2px;

    @media only screen and (max-width: 700px) {
        font-size: 2.4vw;
      }
`;

const menuItems = [
    'OVERVIEW',
    'PRIMARY',
    'ELIMINATIONS',
    'MEDALS'
];

const SubMenu = () => {
    return (
        <StyledMenu>
        {menuItems.map(menuItem => 
            <StyledItems key={menuItem}>
                {menuItem}
            </StyledItems>
        )}
        </StyledMenu>
    )
}

export default SubMenu;