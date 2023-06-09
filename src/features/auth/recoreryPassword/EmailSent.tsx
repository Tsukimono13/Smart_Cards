import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Container} from "components/Container";
import Title from "components/titleCard/Title";
import {Button} from "components/button.styled/Button";
import email from 'assets/img/email.png'

const EmailSent = () => {
    return (
        <MainBlockDiv>
            <MainSignIn>
                <Container>
                    <Block>
                        <Title title={'Check Email'} mBottom={'29px'}/>
                        <img src={email} alt={'Email'}/>
                        <DescriptionText>We’ve sent an Email with instructions to example@mail.com</DescriptionText>
                        <Link to={'/signIn'}>
                        <Button padding={'8px 119px'}>Back to login</Button>
                        </Link>
                    </Block>
                </Container>
            </MainSignIn>
        </MainBlockDiv>
    );
};

export default EmailSent;


const MainBlockDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #f9f9fa;
`
const MainSignIn = styled.div`
  width: 413px;
  min-height: 408px;
  background: #ffffff;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1), -1px -1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  margin-top: 120px;
  display: flex;
`
const Block = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
`

const DescriptionText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
  opacity: 0.5;
  margin-top: 31px;
  width: 328px;
  margin-bottom: 41px;
  text-align: center;
`