import { Grid, TextField } from "@mui/material";
import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Comments from "./Comments";



export default function Home() {
    const comments = [
        {name: 'Thomas Holloway', comment: 'This was such an epic match!'}, 
        {name: 'Max Parker', comment: 'I really liked his technique, I need to learn that move myself'}, 
        {name: 'John Doe', comment: 'Does anyone know the name of the move he made at 4:32?'}]

    const [cmt, setCmt] = React.useState(comments)
    const [currentComment, setCurrentComment] = React.useState('')

    const handleComment = (event) => {
        // Will change the name when we get other stuff hooked up
        const newComment = {name: 'Sterling Walker', comment: currentComment}

        setCmt([...cmt, newComment])
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
            <Paper>
                <MenuList>
                    <MenuItem>
                        <ListItemText>2/12/22</ListItemText>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemText>2/11/22</ListItemText>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemText>2/10/22</ListItemText>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemText>2/9/22</ListItemText>
                    </MenuItem>
                </MenuList>
                </Paper>
            </Grid>
            <Grid item xs={8}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography sx={{ fontSize: 24 }}  gutterBottom>
                            Most Recently uploaded video
                        </Typography>
                        <iframe width="760" height="480" src="https://www.youtube.com/embed/_L-Ni7bFAHg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <Comments comments={cmt} />
                        <TextField label="Enter a comment" variant="outlined" value={currentComment} onChange={event => setCurrentComment(event.target.value)} sx={{width: '95%', marginLeft: '20px'}} />
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="contained" onClick={handleComment}>Add Comment</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}