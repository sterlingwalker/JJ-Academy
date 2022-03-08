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
import { addJournalEntryByUserID, getJournalEntryByUserID } from "../api"

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
        {entry_Title: 'Rough day in practice today', entry_Date: dates[0], entry_Text: 'At the training session today everything was going amazingly, my wrestling was on point, guard and guard passing was phenomenal, "a perfect way to start my training for competition" I thought. Flashforward to today, I was sloppy, got taken down so often, caught in subs and positions I never find myself in. A bad day at the office so to speak, really ruined my confidence.'},
        {entry_Title: 'Training Drills to Practice', entry_Date: '2/18/2022', entry_Text: 'Keep tabs on the completion of all of these training drills', entry_Link: 'https://www.youtube.com/embed/CiMrC9hp0gY'}];

    const [currentEntry, setCurrentEntry] = React.useState(exampleEntries[0])
    const [totalEntries, setTotalEntries] = React.useState([])
    const [modalEntry, setModalEntry] = React.useState(false)

    const [entryTitle, setEntryTitle] = React.useState('')
    const [entryText, setEntryText] = React.useState('')

    React.useEffect(() => {
        getJournalEntryByUserID(55).then(data => {
            console.log(data)

            // Eventually put logic here to populare the entries with what is returned
            // Also update to get user id based on login info
            setTotalEntries(data)

        }).catch(err => console.log(err))
    }, [])

    const changeEntry = (date) => {
        setCurrentEntry(totalEntries.find(dt => formatDate(new Date(dt.entry_Date)) == formatDate(new Date(date))))
    }

    const addEntry = () => {

        addJournalEntryByUserID(entryTitle, entryText, 55).then(result => {
            setModalEntry(false)
            window.location.reload()
        })
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
            <Button variant='contained' onClick={() => setModalEntry(true)}>+ New Entry</Button>

            <Dialog open={modalEntry} fullWidth={true} onClose={() => setModalEntry(false)}>
                <DialogTitle>Add New Journal Entry</DialogTitle>
                <DialogContent>
                    <Box sx={{display: 'flex', flexDirection: 'column', height: '270px'}}>
                        <TextField
                        required
                        label="Entry Title"
                        variant="standard"
                        onChange={(e) => setEntryTitle(e.target.value)}
                        />
                        <TextField
                        required
                        label="Note Text"
                        variant="standard"
                        multiline
                        maxRows={8}
                        onChange={(e) => setEntryText(e.target.value)}
                        />
                        <TextField
                        label="(Optional) Video Link"
                        variant="standard"
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button id = "entrybtn" name = "entrybtn1" onClick={addEntry}>Add Entry</Button>
                </DialogActions>
            </Dialog>

                <Paper>
                        <Typography sx={{ fontSize: 20, textAlign: 'center', paddingTop: '10px' }}  gutterBottom>
                            Entry Dates
                        </Typography>
                    <MenuList>
                        {totalEntries.map(entry => (
                            <div key={entry.entry_Date}>
                                <Divider />
                                <MenuItem onClick={() => changeEntry(entry.entry_Date)}>
                                    <ListItemText>{formatDate(new Date(entry.entry_Date))}</ListItemText>
                                </MenuItem>
                            </div>
                        ))}
                    </MenuList>
                </Paper>
            </Grid>
            <Grid item xs={8}>
                <JournalContent title={currentEntry.entry_Title} date={formatDate(new Date(currentEntry.entry_Date))} text={currentEntry.entry_Text} link={currentEntry.entry_Link} />
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