import React from 'react';
import './App.css';
import SignIn from "features/auth/Sign-in";
import Header from "sections/Header";
import {Route, Routes} from "react-router-dom";
import SignUp from "features/auth/registration/SignUp";
import RecoveryPassword from "features/auth/recoreryPassword/RecoveryPassword";
import EmailSent from "features/auth/recoreryPassword/EmailSent";
import CreateNewPassword from "features/auth/recoreryPassword/CreateNewPassword";
import PersonalInfo from "features/mainPage/PersonalInfo";
import Main from "features/packs/main/Main";


function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="*" element={<Main/>}/>
                <Route path="/registration" element={<SignUp/>}/>
                <Route path="/signIn" element={<SignIn/>}/>
                <Route path="/recovery" element={<RecoveryPassword/>}/>
                <Route path="/email" element={<EmailSent/>}/>
                <Route path="/new" element={<CreateNewPassword/>}/>
                <Route path="/info" element={<PersonalInfo/>}/>
            </Routes>
        </>
    );
}

export default App;
