import React from 'react';
import styled from 'styled-components';

const Slogan = () => { 
    return( 
        <Wrapper> 
            <SloganText>
                Building wealth through 
                <span> strategic</span> investments. Leveraging our 
                <span> expertise</span> and industry 
                <span> insights</span>.
            </SloganText>
        </Wrapper>
    )
}
export default Slogan; 

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 560px;
  text-align: center;
  margin-top: 5%;
`;

const SloganText = styled.p`
  color: black;
  font-family: HelveticaAll;
  font-size: 2.1em;
  font-weight: bold;
  word-wrap: break-word;
  word-break: break-word;

  span {
    color: #1557FF;
  }
`;