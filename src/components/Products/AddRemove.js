import React, { useEffect } from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, SvgIcon } from '@mui/material';
import Icon from '@mui/material/Icon';
import { useSelector, useDispatch } from 'react-redux';
import { updataProducts } from '../../Redux/Reducer/productsReducer';
export default function AddRemove(props) {
    const dispatch = useDispatch();
    // useEffect(() => { }, [props.item.noOfItem])
    return (
        <div style={{ display: 'flex' }}>
            {props.item.noOfItem === props.item.inventoryCount ? <Button></Button> : <Button><Icon onClick={() => { dispatch({ type: 'increaseItem', payload: props.item }) }} color='primary' >add</Icon></Button>}
            <Typography variant="h5" >
                {props.item.noOfItem}
            </Typography>
            <Button><Icon onClick={() => { dispatch({ type: 'decreaseItem', payload: props.item }) }} color='primary'>remove</Icon></Button>
        </div>
    )
}
