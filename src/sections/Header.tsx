import AppBar from '@mui/material/AppBar';
import * as React from 'react';
import {Toolbar, Box} from "@mui/material";
import {Button} from "components/button.styled/Button";



const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" elevation={3} color='inherit'>
                <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }} style={{marginRight:'136px'}}>
                        <Button>Sign In</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
