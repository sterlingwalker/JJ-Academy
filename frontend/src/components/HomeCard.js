import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const root = {
    textAlign: 'center',
    boxShadow: '0 3px 5px 4px #DDD',
  }

  const media = {
    height: 120,
    width: 120,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '2rem'
  }

export default function HomeCard(props) {

  return (
    <Card sx={root} onClick={() => window.location = props.url}>
      <CardActionArea>
        <CardMedia
          sx={media}
          image={props.icon}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" fontSize={18}>
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}