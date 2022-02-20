import { Grid, Dialog, TextField, DialogTitle, DialogContent, DialogActions } from "@mui/material";
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
import Box from '@mui/material/Box';
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
    date = mm+'/'+dd+'/'+yyyy;
    return date
 }


export default function Journal(props) {

    const dates = Last7Days()

    let exampleEntries = [
        {title: 'Rough day in practice today', date: '2/19/2022', text: 'At the training session today everything was going amazingly, my wrestling was on point, guard and guard passing was phenomenal, "a perfect way to start my training for competition" I thought. Flashforward to today, I was sloppy, got taken down so often, caught in subs and positions I never find myself in. A bad day at the office so to speak, really ruined my confidence.'},
        {title: 'Training Drills to Practice', date: '2/18/2022', text: 'Keep tabs on the completion of all of these training drills', link: 'https://www.youtube.com/embed/CiMrC9hp0gY'}];

    const [entry, setEntry] = React.useState(exampleEntries[0])
    const [modalEntry, setModalEntry] = React.useState(false)

    const changeEntry = (date) => {
        setEntry(exampleEntries.find(ent => ent.date == date))
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
            <Button variant='contained' onClick={() => setModalEntry(true)}>+ New Entry</Button>

            <Dialog open={modalEntry} fullWidth={true} onClose={() => setModalEntry(false)}>
                <DialogTitle>Add New Journal Entry</DialogTitle>
                <DialogContent>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around !important'}}>
                        <TextField
                        required
                        label="Entry Title"
                        />
                        <TextField
                        required
                        label="Note Text"
                        multiline
                        maxRows={8}
                        />
                        <TextField
                        label="(Optional) Video Link"
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button>Save Note</Button>
                </DialogActions>
            </Dialog>

                <Paper>
                        <Typography sx={{ fontSize: 20, textAlign: 'center', paddingTop: '10px' }}  gutterBottom>
                            Entry Dates
                        </Typography>
                    <MenuList>
                        {dates.map(date => (
                            <div key={date}>
                                <Divider />
                                <MenuItem onClick={() => changeEntry(date)}>
                                    <ListItemText>{date}</ListItemText>
                                </MenuItem>
                            </div>
                        ))}
                    </MenuList>
                </Paper>
            </Grid>
            <Grid item xs={8}>
                <JournalContent title={entry.title} date={entry.date} text={entry.text} link={entry.link} />
            </Grid>
        </Grid>
    )
}

function JournalContent(props) {

    return (
        <Card variant="outlined">
                    <CardContent>
                        <Typography sx={{ fontSize: 24 }}  gutterBottom>
                             {props.title}
                        </Typography>
                        <Typography sx={{ fontSize: 18 }}  gutterBottom>
                            {props.date}
                        </Typography>
                        <p>{props.text}</p>
                        {props.link  && <iframe width="760" height="480" src={props.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
                        
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="contained" >Add Note</Button>
                    </CardActions>
                </Card>
    );
}