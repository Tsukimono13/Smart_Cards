import {useForm, SubmitHandler} from "react-hook-form";
import {Checkbox, IconButton, InputAdornment, TextField} from "@mui/material";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Container} from "components/Container";
import {Button} from "components/button.styled/Button";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useState} from "react";


type IFormInput = {
    email: string
    password: string
    rememberMe: boolean
}

function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const {register, handleSubmit, formState: {errors, isValid}, reset} = useForm<IFormInput>({mode: 'onBlur'});
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        reset()
    }

    return (
        <BlockDiv>
            <MainSignIn>
                <Container>
                    <Block>
                        <MainText>Sign In</MainText>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
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
                                    error={!!errors.password}
                                    required
                                    type='email'/>
                                {errors?.email && <div style={{color: "red"}}>{errors.email.message}</div>}
                            </div>
                            <PasswordTextFieldBlock>
                                <TextField style={{width: '347px'}}
                                           id="standard-basic"
                                           type={showPassword ? "text" : "password"}
                                           label="Confirm password" variant="standard"
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
                            </PasswordTextFieldBlock>
                            {errors?.password && <div style={{color: "red"}}>{errors.password.message}</div>}
                            <CheckBoxBlock>
                                <Checkbox checked={true} style={{marginRight: '30px', width: '18px', height: '18px'}}/>
                                <RememberMeText>Remember me</RememberMeText>
                            </CheckBoxBlock>
                            <LinkBox>
                                <ForgotPass to={'/forgotPassword'}>Forgot Password?</ForgotPass>
                            </LinkBox>
                            <div>
                                <Button padding={'8px 145px'} type='submit' disabled={!isValid}>Sign In</Button>
                            </div>
                            <HaveAcc>Already have an account?</HaveAcc>
                            <LinkSignUpBox>
                                <SignUp to={'/signUp'}>Sign Up</SignUp>
                            </LinkSignUpBox>
                        </form>
                    </Block>
                </Container>
            </MainSignIn>
        </BlockDiv>
    );
}

export default SignIn;

const MainSignIn = styled.div`
  width: 413px;
  height: 552px;
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
const BlockDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #f9f9fa;
`
const MainText = styled.h2`
  font-weight: 600;
  font-size: 26px;
  line-height: 32px;
  color: #000000;
  margin-top: 35px;
  margin-bottom: 41px;
`
const RememberMeText = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  margin-left: -12px;
`
const LinkBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 29px;
  margin-bottom: 69px;
`

const PasswordTextFieldBlock = styled.div`
  margin-top: 24px;
`
const CheckBoxBlock = styled.div`
  margin-top: 24px;
`

const ForgotPass = styled(Link)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`
const HaveAcc = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  opacity: 0.5;
  margin-top: 31px;
  margin-bottom: 11px;
`
const SignUp = styled(Link)`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  text-decoration-line: underline;
  color: #366EFF;
`

const LinkSignUpBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 29px;
  margin-bottom: 42px;
`