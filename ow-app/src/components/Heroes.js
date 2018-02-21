import React, { Component } from 'react';
import styled from 'styled-components';

const Herowrapper = styled.div`
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

const Hero = styled.div`
    display: grid;
    grid-template-columns: 1;
    grid-template-rows: 1;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    -webkit-box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    -moz-box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

class Heroes extends Component {
    render() {
        return(
            <Herowrapper>
                <Hero />
                <Hero />
                <Hero />
                <Hero />
            </Herowrapper>
        )
    }
}

export default Heroes;