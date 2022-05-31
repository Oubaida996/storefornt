import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';


export default function MediaCard(props) {
    const { displayName, description, price, inetoryCount, image } = props.item
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
            </CardContent>
            <CardActions>
                <Button size="small">add to cart</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}






