import React from 'react';
import styled from 'styled-components';

const Logo = () => {
    return (
        <LogoWrapper>
            <LogoText1>DRAYTON</LogoText1>
            <Line />
            <LogoText2>ADVISORS SA</LogoText2>
        </LogoWrapper>
    )
}
export default Logo;

const LogoWrapper = styled.div`
display: flex; 
flex-direction: column;
align-items: center; 
margin-left: 50%;
margin-top: 15%;

@media (max-width: 1000px) {
    margin-left: 0%;
    margin-top: 15%;
}
`
const LogoText1 = styled.p`
color: black; 
font-family: BarlowBold;
font-size: 4em;
text-align: center;
`
const LogoText2 = styled.p`
color: black; 
font-family: BarlowBold;
font-size: 1.2em;
text-align: center;
`
const Line = styled.div`
height: 5px;
width: 60px;
background-color: #1557FF;
margin-top: -20%; 
`