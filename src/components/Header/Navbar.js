import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Button } from '@mui/material';


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