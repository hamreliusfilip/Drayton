import React from 'react';
import styled from 'styled-components';

import Background from './Images/Background.png';
import ProfileImage from './Images/Profile.jpeg'; 

import Contact from './Contact.js';



function App() {
  return (
    <Wrapper>
      <Contact />
      <Image src={ProfileImage} />
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
`
const Image = styled.img`
  border-radius: 50%;
  width: 15%;
  height: auto;
  float: right; 
  margin: 2%;
`
