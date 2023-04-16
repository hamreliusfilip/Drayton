import React from 'react'
import styled from 'styled-components'
import Marquee from 'react-fast-marquee'

import dot from './Images/dot.png';

function Slider() {
    return (
        <Wrapper>
          <Marquee gradientWidth = '0' speed = '200' > 
            <Text> SECURE PROFITABLE STRATEGIC TAILORED DYNAMIC SECURE PROFITABLE STRATEGIC TAILORED DYNAMIC </Text>
          </Marquee>
        </Wrapper>
    )
}
export default Slider; 

const Text = styled.h1`
font-family: 'LED';
font-size: 4em;
color: #1557FF;
margin-top: 13px;

@media (max-width: 1000px) {
  font-size: 2em;
  margin-top:0;
}
`
const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: black;
  background-image: url(${dot});
  position: fixed;
  bottom: 0;
  left: 0;

  @media (max-width: 1000px) {
    height: 60px;
    font-size: 2em;
    margin-top:0;
  }
`;
