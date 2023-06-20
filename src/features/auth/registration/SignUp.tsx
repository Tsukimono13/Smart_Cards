import {useForm, SubmitHandler} from "react-hook-form";
import {IconButton, InputAdornment, TextField} from "@mui/material";
import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";
import {Container} from "components/Container";
import {Button} from "components/button.styled/Button";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useState} from "react";
import Title from "components/titleCard/Title";
import {authThunks} from "features/auth/auth-slice";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {toast} from "react-toastify";


type IFormInput = {
    email: string
    password: string
    confirmPassword: string
}

function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {register, handleSubmit, formState: {errors, isValid}, reset, watch} = useForm<IFormInput>({mode: 'onBlur'});
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        const {confirmPassword, ...formData} = data;
        dispatch(authThunks.register(formData))
            .unwrap()
            .then(() => {
                toast.success('Registration is successful')
                setTimeout(() => {
                    navigate('/signIn')
                }, 1000)
            }).catch((err) => {
            toast.error(err.e.response.data.error);
        });
        reset()
    }
    const password = watch('password');
    return (
        <MainBlockDiv>
            <MainSignIn>
                <Container>
                    <Block>
                        <Title title={'Sign Up'}/>
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
                            </PasswordTextFieldBlock>
                            <PasswordTextFieldBlock>
                                <TextField style={{width: '347px'}}
                                           id="standard-basic"
                                           type={showPassword ? "text" : "password"}
                                           label="Confirm password" variant="standard"
                                           {...register("confirmPassword", {
                                               required: "This filed is required",
                                               minLength: {
                                                   value: 5,
                                                   message: 'Write more then 5 letters'
                                               },
                                               validate: (value) => value === password || 'The passwords do not match',
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
                                {errors.confirmPassword &&
                                    <div style={{color: "red"}}>{errors.confirmPassword.message}</div>}
                            </PasswordTextFieldBlock>
                            <ButtonContainer>
                                <Button padding={'8px 145px'} type='submit' disabled={!isValid}>Sign Up</Button>
                            </ButtonContainer>
                            <TextQuestion>Already have an account?</TextQuestion>
                            <LinkWrapper>
                                <LinkAnotherPage to={'/signIn'}>Sign In</LinkAnotherPage>
                            </LinkWrapper>
                        </form>
                    </Block>
                </Container>
            </MainSignIn>
        </MainBlockDiv>
    );
}

export default SignUp;

const MainSignIn = styled.div`
  width: 413px;
  min-height: 552px;
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
const MainBlockDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #f9f9fa;
`

const PasswordTextFieldBlock = styled.div`
  margin-top: 24px;
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
const ButtonContainer = styled.div`
  margin-top: 60px;
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