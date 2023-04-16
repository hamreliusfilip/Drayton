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
        <Wrapper>
            <div>
                <StyledA href="https://www.linkedin.com/in/henrik-sporje-61803011/" target="_blank">
                    <Logo src={Linkedin} />
                </StyledA>

                <StyledA href="mailto:henrik.sporje@gmail.com">
                    <Logo src={Mail} />
                </StyledA>

                <Button onClick={handleCopyClick}>
                    <Logo src={Phone} />
                </Button>
                <Prompt>{isCopied ? 'COPIED TO CLIPBOARD' : 'COPY TO CLIPBOARD'}</Prompt>
            </div>
        </Wrapper>
    )
}
export default Contact; 

const Wrapper = styled.div`
    position: absolute;
    top: 1%;
    right: 1%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1000px) {
        position: fixed;
        top: 80%;
        right: 50%;
        transform: translate(50%, -50%);
        white-space: nowrap;
    }
`;

const Prompt = styled.p`
    display: none;
    position: fixed;
    color: #1557FF;
    font-family: BarlowBold;
    font-weight: 400;
    top: 70px;
    right: 43px;
`
const Button = styled.button`
    all: unset;
    cursor: pointer;

    &:hover + ${Prompt} {
        display: block;
    }
`
const Logo = styled.img`
    width: 3em;
    height: auto;
    cursor: pointer;
    padding: 15px;

&:hover {
    transform: scale(1.1);
    transition: 0.2s;
}
`
const StyledA = styled.a`
    postion: relative;
`
