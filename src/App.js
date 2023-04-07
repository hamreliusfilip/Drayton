import React from 'react';
import styled from 'styled-components';

import Background from './Images/Background.png';

import Contact from './Contact.js';
import Logo from './Logo.js';
import Slogan from './Slogan.js';
import Spinning from './Spinning.js';

function App() {
  return (
    <Wrapper>
      <Logo />
      <Slogan /> 
      <Contact />
      <Spinning />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  background-image: url(${Background});
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: bottom;

  display: flex;
  flex-direction: column;
  align-items: center;
`
