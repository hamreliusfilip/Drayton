import React from 'react';
import styled from 'styled-components';

import Contact from './Contact.js';
import Logo from './Logo.js';
import Slogan from './Slogan.js';
import Slider from './Slider.js';

import Background from './Images/Background.png';

function App() {
  return (
    <Wrapper>
      
      <Logo />
      <Slogan /> 
      <Contact />
      <Slider />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  background-image: url(${Background});
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (max-width: 1000px) {
    background-image: none;
    background-color: #DEDEDE;
  }
`;
