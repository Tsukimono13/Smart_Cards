import React from 'react';
import {Container} from "components/Container";
import Title from "components/titleCard/Title";
import {Link} from "react-router-dom";
import styled from "styled-components";
import myPhoto from "assets/img/photo_2023-06-04_16-49-33 (2).jpg"
import changePhoto from "assets/icons/changePhoto.svg"
import edit from "assets/icons/Edit.svg"
import logOut from "assets/icons/logout.svg"

const PersonalInfo = () => {
    return (
        <MainBlockDiv>
            <MainSignIn>
                <Container>
                    <Block>
                        <Title title={'Personal Information'} size={'22px'} lineHeight={'27px'} mTop={'27px'} mBottom={'30px'}/>
                        <ImgContainer>
                            <PhotoStyled src={myPhoto} alt={''}/>
                            <ChangePhotoBtn src={changePhoto} alt={''}/>
                        </ImgContainer>
                        <NameBlock>
                            <NameStyled>Irina</NameStyled>
                            <img src={edit} alt={''}/>
                        </NameBlock>
                        <DescriptionText>neforsha@yandex.ru</DescriptionText>
                        <Link to={'/logOut'}>
                            <LogOutButton>
                                <img src={logOut} alt={''}/>
                                <p>Log out</p>
                            </LogOutButton>
                        </Link>
                    </Block>
                </Container>
            </MainSignIn>
        </MainBlockDiv>
    );
};

export default PersonalInfo;


const MainBlockDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #f9f9fa;
`
const MainSignIn = styled.div`
  width: 413px;
  min-height: 360px;
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
  opacity: 0.5;
  margin-top: 14px;
  width: 328px;
  margin-bottom: 29px;
  text-align: center;
`
const PhotoStyled = styled.img`
  height: 96px;
  width: 96px;
  border-radius: 50px;
`
const ChangePhotoBtn = styled.img`
position: absolute;
  right: 0;
  bottom: 0;
`
const ImgContainer = styled.div`
  position: relative;
  margin-bottom: 17px;
`
const NameBlock = styled.div`
display: flex;
  gap: 8px;
`
const NameStyled = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`
const LogOutButton = styled.button`
  background: #FCFCFC;
  box-shadow: 0px 2px 10px rgba(109, 109, 109, 0.25), inset 0px 1px 0px rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #000000;
  opacity: 0.8;
  padding: 8px 20px 8px 43px;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    margin-right: 7px;
    margin-left: -20px;
  }
`