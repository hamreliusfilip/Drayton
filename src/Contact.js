import React, {useState} from 'react'
import styled from 'styled-components'

import Phone from './Logos/phone.svg';
import Linkedin from './Logos/linkedin.svg';
import Mail from './Logos/mail.svg';

function Contact() {

    const [isCopied, setIsCopied] = useState(false);
    const phoneNumber = '+46 78 781 89 72'

    const handleCopyClick = () => {
        navigator.clipboard.writeText(phoneNumber);
        setIsCopied(true);
    }

    return (
        <div>
            <Text> HENRIK SPORJE. </Text>

            <LogoWrapper>
                <StyledA href="https://www.linkedin.com/in/henrik-sporje-61803011/" target="_blank">
                    <Logo src={Linkedin} />
                </StyledA>

                <StyledA href="mailto:henrik.sporje@gmail.com">
                    <Logo src={Mail} />
                </StyledA>

                <Button onClick={handleCopyClick}>
                    <Logo src={Phone} />
                </Button>
                <Prompt> {isCopied ? 'Copied' : ''} </Prompt>
            </LogoWrapper>
        </div>
    )
}
export default Contact; 

const Text = styled.p`
    color: black; 
    font-family: Helvetica;
    font-size: 4em;
    font-weight: bold;
`
const Prompt = styled.p`
    color: black; 
    font-family: Helvetica;
    font-size: 1em;
    font-weight: 400;
`
const Button = styled.button`
    all: unset;
    cursor: pointer;
`
const LogoWrapper = styled.div`
    display: flex;
    flex-direction: row;
`
const Logo = styled.img`
    width: 4em;
    height: auto;
    cursor: pointer;
    padding: 0.5em;

&:hover {
    transform: scale(1.2);
    transition: 0.5s;
}
`
const StyledA = styled.a`
    postion: relative;
`   


