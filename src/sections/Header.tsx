import AppBar from '@mui/material/AppBar';
import * as React from 'react';
import {Toolbar, Box, LinearProgress} from "@mui/material";
import {Button} from "components/button.styled/Button";
import {useAppSelector} from "app/hooks";


const Header = () => {
    const isLoading = useAppSelector((state) => state.app.isLoading);
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="fixed" elevation={3} color='inherit'>
                <Toolbar sx={{display: 'flex', justifyContent: 'flex-end'}} style={{marginRight: '136px'}}>
                    <Button>Sign In</Button>
                </Toolbar>
                {isLoading && <LinearProgress/>}
            </AppBar>
        </Box>
    );
}

export default Header;
