import { Grid, Card, Typography, CardContent, CardMedia, CardActions, Button } from '@mui/material'
import React from 'react'

export const CardPhoto = ({ photoInfo }) => {
    return (
        <Grid item xs={12} sm={6} md={4} >
            <Card elevation={9} >
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="300"
                    width="300"
                    image={photoInfo.url}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Album Numero {photoInfo.albumId}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {photoInfo.title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}
