import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import React from 'react';

const PokemonDetailsPage = async()=>{

        return (
 
            <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                // image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 test
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
            )
        }
        export default PokemonDetailsPage