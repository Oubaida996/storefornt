import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';


export default function MediaCard(props) {
    const dispatch = useDispatch();
    const { displayName, description, price, inventoryCount, image } = props.item
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
            </CardContent>
            <CardActions>
                {
                    props.cart === 'cart' ? <Button size="small" onClick={() => {
                        dispatch({ type: "STOCKCOUNTER", payload: displayName });
                        dispatch({ type: "removeProuctFromCart", payload: props.item });
                    }}>delete from cart</Button>
                        :
                        inventoryCount <= 0 ? <Button></Button> : <Button size="small" onClick={() => {
                            dispatch({ type: "STOCKCOUNTER", payload: displayName });
                            dispatch({ type: "addProductToCart", payload: props.item });
                        }}>add to cart</Button>
                }

                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}






