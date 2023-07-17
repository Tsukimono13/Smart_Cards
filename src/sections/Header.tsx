import AppBar from '@mui/material/AppBar';
import * as React from 'react';
import {Toolbar, Box, LinearProgress} from "@mui/material";
import {Button} from "components/button.styled/Button";
import {useAppSelector} from "common/hooks/useAppSelector";
import {authThunks, isInitialized, logOut} from "features/auth/auth-slice";
import {useEffect} from "react";
import {useActions} from "common/hooks/useActions";
import {Navigate} from "react-router-dom";


const Header = () => {
    const isLoading = useAppSelector((state) => state.app.isLoading);
    const profile = useAppSelector((state) => state.auth.profile);
    const {logOut, isInitialized} = useActions(authThunks);

    useEffect(() => {
        isInitialized({});
    }, []);

    const logoutHandler = () => logOut({});

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="fixed" elevation={3} color='inherit'>
                <Toolbar sx={{display: 'flex', justifyContent: 'flex-end'}} style={{marginRight: '136px'}}>
                   {/* {profile ? (
                        <Button onClick={logoutHandler}>Log out</Button>
                    ) : (
                        <Navigate to={"/signIn"}/>
                    )}*/}
                </Toolbar>
                {isLoading && <LinearProgress/>}
            </AppBar>
        </Box>
    );
}

export default Header;
