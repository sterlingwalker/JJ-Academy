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

function Last7Days () {
    var result = [];
    for (var i=0; i<7; i++) {
        var d = new Date();
        d.setDate(d.getDate() - i);
        result.push( formatDate(d) )
    }

    return result;
}

function formatDate(date){

    var dd = date.getDate();
    var mm = date.getMonth()+1;
    var yyyy = date.getFullYear();
    if(dd<10) {dd='0'+dd}
    if(mm<10) {mm='0'+mm}
    date = mm+'/'+dd+'/'+yyyy;
    return date
 }

export default function Home() {
    const comments = [
        {name: 'Thomas Holloway', comment: 'This was such an epic match!'}, 
        {name: 'Max Parker', comment: 'I really liked his technique, I need to learn that move myself'}, 
        {name: 'John Doe', comment: 'Does anyone know the name of the move he made at 4:32?'}]

    const [cmt, setCmt] = React.useState(comments)
    const [currentComment, setCurrentComment] = React.useState('')
    const dates = Last7Days()


    const handleComment = (event) => {
        // Will change the name when we get other stuff hooked up
        const newComment = {name: 'Sterling Walker', comment: currentComment}

        setCmt([...cmt, newComment])
        setCurrentComment('')
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
            <Paper>
                <MenuList>
                    {dates.map(date => (
                        <React.Fragment>

                            <MenuItem>
                                <ListItemText>{date}</ListItemText>
                            </MenuItem>
                            <Divider />
                        </React.Fragment>
                    ))}
                </MenuList>
                </Paper>
            </Grid>
            <Grid item xs={8}>
                <Card variant="outlined">
                    <CardContent>
                   
                        <Typography sx={{ fontSize: 24 }}  gutterBottom>
                        <form action="/" method="get">
                            <label htmlFor="header-search">
                            <span className="visually-hidden">Search date or topic  </span>
                            </label>
                            <input
                                type="text"
                                id="header-search"
                                placeholder="Search date or topic"
                                name="s" 
                            />
                        <button type="submit">Search</button>
                        </form>
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