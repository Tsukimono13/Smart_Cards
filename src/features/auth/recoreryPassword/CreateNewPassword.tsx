import React, {useState} from 'react';
import {Container} from "components/Container";
import Title from "components/titleCard/Title";
import {IconButton, InputAdornment, TextField} from "@mui/material";
import {Button} from "components/button.styled/Button";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {SubmitHandler, useForm} from "react-hook-form";

type IFormInput = {
    password: string
}

const CreateNewPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const {register, handleSubmit, formState: {errors, isValid}, reset} = useForm<IFormInput>({mode: 'onBlur'});
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data)
    }

    return (
        <MainBlockDiv>
            <MainSignIn>
                <Container>
                    <Block>
                        <Title title={'Create new password'}/>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormContainer>
                                <TextField style={{width: '347px'}}
                                           id="standard-basic"
                                           type={showPassword ? "text" : "password"}
                                           label="Password" variant="standard"
                                           {...register("password", {
                                               required: "This filed is required",
                                               minLength: {
                                                   value: 5,
                                                   message: 'Write more then 5 letters'
                                               }
                                           })}
                                           error={!!errors.password}
                                           required
                                           InputProps={{
                                               endAdornment: (
                                                   <InputAdornment position="end">
                                                       <IconButton
                                                           aria-label="toggle password visibility"
                                                           onClick={handleClickShowPassword}
                                                           onMouseDown={handleMouseDownPassword}
                                                           sx={{color: '#DADADA'}}
                                                       >
                                                           {showPassword ? <Visibility/> : <VisibilityOff/>}
                                                       </IconButton>
                                                   </InputAdornment>
                                               ),
                                           }}
                                />
                                {errors?.password && <div style={{color: "red", marginRight: "143px"}}>{errors.password.message}</div>}
                                <DescriptionText>Create new password and we will send you further instructions to
                                    email</DescriptionText>
                                <Button padding={'8px 101px'} type='submit' disabled={!isValid}>Create new
                                    password</Button>
                            </FormContainer>
                        </form>
                    </Block>
                </Container>
            </MainSignIn>
        </MainBlockDiv>
    );
};

export default CreateNewPassword;


const MainBlockDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #f9f9fa;
`
const MainSignIn = styled.div`
  width: 413px;
  min-height: 372px;
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
  margin-top: 18px;
  width: 347px;
  margin-bottom: 42px;
`
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

