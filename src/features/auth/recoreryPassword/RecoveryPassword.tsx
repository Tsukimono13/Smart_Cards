import React from 'react';
import styled from "styled-components";
import {Container} from "components/Container";
import {TextField} from "@mui/material";
import {Button} from "components/button.styled/Button";
import {Link} from "react-router-dom";
import Title from "components/titleCard/Title";
import {SubmitHandler, useForm} from "react-hook-form";
import {authThunks} from "features/auth/auth-slice";
import {useAppDispatch} from "app/hooks";

type IFormInput = {
    email: string
    message: string
}

const RecoveryPassword = () => {
    const dispatch = useAppDispatch()
    const {register, handleSubmit, formState: {errors, isValid}, reset} = useForm<IFormInput>({mode: 'onBlur'});
    const emailMessage = `<div style="background-color: lime; padding: 15px">
password recovery link: 
<a href='http://localhost:3000/#/set-new-password/$token$'>
link</a>
</div>`

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        const dataWithMessage = {
            ...data, message: emailMessage
        }
        console.log(dataWithMessage)
        dispatch(authThunks.forgotPassword(dataWithMessage))
        reset()
    }
    return (
        <MainBlockDiv>
            <MainSignIn>
                <Container>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Block>
                            <Title title={'Forgot your password?'}/>
                            <TextField
                                style={{width: '347px'}}
                                id="standard-basic"
                                label="Email"
                                variant="standard"
                                {...register("email", {
                                    required: "This filed id required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'Please enter your email'
                                    }
                                })}
                                error={!!errors.email}
                                required
                                type='email'/>
                            {errors?.email &&
                                <div style={{color: "red", marginRight: '180px'}}>{errors.email.message}</div>}
                            <DescriptionText>Enter your email address and we will send you further
                                instructions</DescriptionText>
                            <Button padding={'8px 101px'} type='submit' disabled={!isValid}>Send Instructions</Button>
                            <TextQuestion>Did you remember your password?</TextQuestion>
                            <LinkWrapper>
                                <LinkAnotherPage to={'/signIn'}>Try logging in</LinkAnotherPage>
                            </LinkWrapper>
                        </Block>
                    </form>
                </Container>
            </MainSignIn>
        </MainBlockDiv>
    );
};

export default RecoveryPassword;


const MainBlockDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #f9f9fa;
`
const MainSignIn = styled.div`
  width: 413px;
  min-height: 456px;
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
const TextQuestion = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  opacity: 0.5;
  margin-top: 31px;
  margin-bottom: 11px;
`
const LinkAnotherPage = styled(Link)`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  text-decoration-line: underline;
  color: #366EFF;
`

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 29px;
  margin-bottom: 42px;
`
const DescriptionText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
  opacity: 0.5;
  margin-top: 26px;
  width: 347px;
  margin-bottom: 65px;
`
