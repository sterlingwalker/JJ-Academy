import { Grid, TextField } from "@mui/material";
import * as React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Comments from "./Comments";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { addMatchByUserID, getMatches, insertMatches } from "../api";

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
        {title: 'Intense Showdown', date: dates[0], link: 'https://www.youtube.com/embed/8HzJTUC6JtE', comment: true},
        {title: 'Best Jiu Jitsu match of all time', date: dates[1], link: 'https://www.youtube.com/embed/_SXSPBFBFH0', comment: true}]

    const [entry, setEntry] = React.useState(matches)
    const [value, setValue] = React.useState(null);
    const [modalEntry, setModalEntry] = React.useState(false)

    const [entryTitle, setEntryTitle] = React.useState('')
    const [entryLink, setEntryLink] = React.useState('')
    const [cmt, setCmt] = React.useState(comments)

    const [currentComment, setCurrentComment] = React.useState('')
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'))

    const handleComment = (event) => {
        // Will change the name when we get other stuff hooked up
        const newComment = {name: 'Sterling Walker', comment: currentComment}

        setCmt([...cmt, newComment])
        setCurrentComment('')
    }

    const addEntry = () => {
        
        let newMatch = {title: entryTitle, date: dates[0], link: entryLink}
        entry.unshift(newMatch)
        setEntry(entry)
        setModalEntry(false)

        insertMatches(entryTitle,entryLink,55)

        localStorage.setItem('matches', JSON.stringify(entry))


    }

    React.useEffect(() => {
        let matches = localStorage.getItem('matches')
        if (matches !== null) {
            setEntry(JSON.parse(matches))
        } 
    }, [])

    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
            <Dialog open={modalEntry} fullWidth={true} onClose={() => setModalEntry(false)}>
                <DialogTitle>Add New Match</DialogTitle>
                <DialogContent>
                    <Box sx={{display: 'flex', flexDirection: 'column', height: '270px'}}>
                        <TextField
                        name = "matchTitle"
                        required
                        label="Entry Title"
                        variant="standard"
                        onChange={(e) => setEntryTitle(e.target.value)}
                        />
                        <TextField
                        name = "videoupload"
                        required
                        label="Video Link"
                        variant="standard"
                        multiline
                        maxRows={8}
                        onChange={(e) => setEntryLink(e.target.value)}
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button id = 'matchentry' name = 'matchbutton' onClick={addEntry}>Add Entry</Button>
                </DialogActions>
            </Dialog>
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
            <Grid item xs>
                <Button variant='contained' onClick={() => setModalEntry(true)}>+ New Entry</Button>
            </Grid>
            {entry.map(entry => (
                <Grid item xs >
                    <MatchContent title={entry.title} date={entry.date} link={entry.link} cmt={entry.comment} />
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
                    {props.cmt && <Comments comments={comments} />}
                    <TextField label="Enter a comment" variant="outlined" /*value={currentComment} onChange={event => setCurrentComment(event.target.value)}*/ sx={{width: '95%', marginLeft: '20px'}} />
                    <CardActions>
                        <Button size="small" variant="contained" >Add Comment</Button>
                    </CardActions>
                </Card>
    );
}