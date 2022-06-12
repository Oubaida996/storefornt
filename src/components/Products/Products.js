import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, SvgIcon } from '@mui/material';
import AddRemove from './AddRemove';
import { updataProducts } from '../../Redux/Reducer/productsReducer';




export default function MediaCard(props) {
    const dispatch = useDispatch();

    const { displayName, description, price, inventoryCount, image, id, noOfItem } = props.item
    return (
        <Card style={{ margin: '10px' }} sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt={displayName}
            />
            <CardContent >
                <Typography gutterBottom variant="h5" component="div" flexGrow={1} >
                    {displayName}
                </Typography>
                <Typography gutterBottom variant="h5" component="div" flexGrow={1} >
                    price :{price}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="h5" >
                    stock :{inventoryCount <= 0 ? 0 : inventoryCount}
                </Typography>

                {props.cart === 'cart' ? <AddRemove item={props.item} /> : <Button></Button>}




            </CardContent>
            <CardActions>
                {
                    props.cart === 'cart' ? <Button size="small" onClick={() => {
                        dispatch(updataProducts(id, inventoryCount, 'ICN'));
                        dispatch({ type: "removeProuctFromCart", payload: props.item });
                    }}>delete from cart</Button>
                        :
                        inventoryCount <= 0 ? <Button></Button> : <Button size="small" onClick={() => {
                            dispatch({ type: "addProductToCart", payload: props.item });
                            dispatch(updataProducts(id, inventoryCount, 'DEC'));

                        }}>add to cart</Button>
                }

                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}






