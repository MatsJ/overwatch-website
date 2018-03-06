import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
    font-weight: 700;
    padding: 8px;
    border-radius: 2px;
    text-decoration: none;

    @media only screen and (max-width: 700px) {
        font-size: 1em;
    }
`;

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

class Menu extends React.Component {
    render() {
        return (
            <StyledMenu>
                <Nav>
                <List>
                    <ListItem>
                        <StyledLink onClick={this.props.loadHeroes} to='/'>HEROES</StyledLink>
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
            </StyledMenu>
        )
    }
}

export default Menu;