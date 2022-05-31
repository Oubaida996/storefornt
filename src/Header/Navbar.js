import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

export default function DenseAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography flexGrow={1} variant="h6" color="inherit" component="div">
                        Our Strore
                    </Typography>
                    <Button color="inherit">Cart ({2})</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}