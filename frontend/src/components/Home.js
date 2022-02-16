import { Grid } from "@mui/material";
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


export default function Home() {

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

                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Most Recently uploaded video 
                        </Typography>
                        <iframe width="760" height="480" src="https://www.youtube.com/embed/_L-Ni7bFAHg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}