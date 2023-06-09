import React from 'react';
import './App.css';
import SignIn from "features/auth/Sign-in";
import Header from "sections/Header";
import {Route, Routes} from "react-router-dom";


function App() {
    return (
        <>
            <Header/>
                <Routes>
                    <Route path="/" element={<SignIn/>}/>
                </Routes>
        </>
    );
}

export default App;
