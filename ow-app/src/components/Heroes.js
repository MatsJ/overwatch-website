import React, { Component } from 'react';
import styled from 'styled-components';
import heroes from '../heroes.json';

const Container = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, 200px);
    grid-auto-rows: 220px;
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: center;

    @media only screen and (max-width: 700px) {
        grid-template-columns: repeat(auto-fit, 170px);
        grid-auto-rows: 220px;
    }
`;

const Herowrapper = styled.div`
    display: grid;
    grid-template-columns: 1;
    grid-template-rows: 1;
    justify-content: center;
    align-content: center;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    -webkit-box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    -moz-box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

const HeroImage = styled.img`
    width: 70px;
    height: 116px;
    transition: ease .5s;
`;

const HeroName = styled.p`
    text-align: center;
`;



class Heroes extends Component {
    render() {
        const heroarray = [];
            for(let i = 0; i<heroes.length; i++) {
                heroarray.push(heroes[i]);
            }
        return(
            <Container>
                
                {heroarray.map(menuItem => 
                    <Herowrapper key={menuItem.id}>
                        <HeroImage key={menuItem.name} src={menuItem.image} alt={menuItem.name}/>
                        <HeroName>{menuItem.name}</HeroName>
                    </Herowrapper>
                )}
                
            </Container>
        )
    }
}

export default Heroes;