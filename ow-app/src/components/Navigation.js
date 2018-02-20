import styled from 'styled-components';
import React from 'react';

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
    -webkit-padding-start: 25px;
    cursor: pointer;
    margin: auto;

    @media only screen and (max-width: 700px) {
        margin-left: -8%;
    }
`;

const ListItem = styled.li`
    list-style-type: none;
`;

const Navigation = (props) => {
    return(
        <Nav>
            <List>
                <ListItem>HEROES</ListItem>
                <ListItem>OWL</ListItem>
                <ListItem>PATCHNOTES</ListItem>
                <ListItem>STATS</ListItem>
            </List>
        </Nav>
    )
}

export default Navigation;