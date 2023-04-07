import React from 'react';
import styled, { keyframes } from 'styled-components';

const Spinning = () => {
    return (
        <CircleText>
            <svg viewBox="0 0 100 100">
                <TextPath id="circle-text-path" d="M 50, 50 m -50, 0 a 50,50 0 1,0 100,0 a 50,50 0 1,0 -100,0" />
                <Text>
                    <textPath xlinkHref="#circle-text-path">henrik sporje</textPath>
                </Text>
            </svg>
        </CircleText>
    )
}
export default Spinning; 

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`;

const CircleText = styled.div`
position: fixed;
width: 175px;
height: 175px;
margin: 0 auto;
animation: ${spin} 5s linear infinite;

margin-left: 80%;
margin-top: 2%;
`;

const TextPath = styled.path`
fill: none;
stroke: none;
text-anchor: middle;
`;

const Text = styled.text`
font-size: 1em;
font-weight: 400;
letter-spacing: 12px;
text-transform: uppercase;

font-family: HelveticaAll;
fill: #1557FF;
`;