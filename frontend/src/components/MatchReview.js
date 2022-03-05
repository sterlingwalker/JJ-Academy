import { Grid, TextField } from "@mui/material";
import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Comments from "./Comments";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

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
    date = mm+'/'+dd+'/'+yyyy;
    return date
 }

 const comments = [
    {name: 'Thomas Holloway', comment: 'This was such an epic match!'}, 
    {name: 'Max Parker', comment: 'I really liked his technique, I need to learn that move myself'}, 
    {name: 'John Doe', comment: 'Does anyone know the name of the move he made at 4:32?'}]

export default function MatchReview(props) {

    const dates = Last7Days()

    const matches = [
        {title: 'Intense Showdown', date: dates[0], link: 'https://www.youtube.com/embed/8HzJTUC6JtE'},
        {title: 'Best Jiu Jitsu match of all time', date: dates[1], link: 'https://www.youtube.com/embed/_SXSPBFBFH0'}]

    const [entry, setEntry] = React.useState(matches)
    const [value, setValue] = React.useState(null);

    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
            <Grid item xs>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Enter a date"
                        value={value}
                        onChange={(newValue) => {
                        setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </Grid>
            {entry.map(entry => (
                <Grid item xs >
                    <MatchContent title={entry.title} date={entry.date} link={entry.link} />
                </Grid>
            ))}
        </Grid>
    )
}

function MatchContent(props) {

    return (
        <Card variant="outlined">
                    <CardContent>
                        <Typography sx={{ fontSize: 24 }}  gutterBottom>
                             {props.title}
                        </Typography>
                        <Typography sx={{ fontSize: 18 }}  gutterBottom>
                            {props.date}
                        </Typography>
                        {props.link  && <iframe width="760" height="480" src={props.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
                    </CardContent>
                    <Comments comments={comments} />
                    <CardActions>
                        <Button size="small" variant="contained" >Add Comment</Button>
                    </CardActions>
                </Card>
    );
}