import styled from 'styled-components';
import React, { Component } from 'react';
import { baseColor } from '../App';



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
    cursor: pointer;
    margin: auto;
`;

const ListItem = styled.li`
    list-style-type: none;
    padding: 6px;
    border-radius: 2px;
`;

const menuItems = [
    'HEROES',
    'OWL',
    'PATCHNOTES',
    'STATS'
 ];

class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            isActive: true
        };
        this.makeActive = this.makeActive.bind(this);
    }
    makeActive(e) {
        this.setState(prevState => ({
            isActive: !prevState.isActive,
        }));
        console.log(this.state.isActive);
        this.state.isActive ? e.target.style.backgroundColor = 'white' : e.target.style.backgroundColor = 'transparent';
        this.state.isActive ? e.target.style.color = 'rgba(0, 0, 255, 0.8)' : e.target.style.color = 'white';
        this.state.isActive ? e.target.style.boxShadow = '0px 2px 5px 0px rgba(0,0,0,0.37)' : e.target.style.boxShadow = 'none';
    }
    render() {
        return (
        <Nav>
            <List>
            {menuItems.map(menuItem => 
                <ListItem key={menuItem} onClick={this.makeActive}>
                  {menuItem}
                </ListItem>
             )}
            </List>
        </Nav>
        )
    }
}

export default Navigation;