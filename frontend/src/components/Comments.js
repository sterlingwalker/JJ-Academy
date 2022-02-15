import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';



export default function Comments(props) {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {props.comments.map(comment => {
            return (
            <React.Fragment>
                <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt={comment.name} src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                primary={comment.name.toString()}
                secondary={
                    <React.Fragment>
                    {comment.comment}
                    </React.Fragment>
                }
                />
                </ListItem>
                <Divider variant="inset" component="li" />
            </React.Fragment>
        )})}

    </List>
  );
}
