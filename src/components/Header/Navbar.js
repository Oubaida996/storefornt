import React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function DenseAppBar() {
    const cartCounter = useSelector(state => state.Cart.counter)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography flexGrow={1} variant="h6" color="inherit" component="div">
                        <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/"> Our Strore </Link>
                    </Typography>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/cart"><Button color="inherit">Cart ({cartCounter})</Button></Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}