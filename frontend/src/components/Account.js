import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Box, Input } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Dialog, TextField, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function Account(props) {

    const startingInfo = {
        name: 'Sterling Walker', 
        role: 'Teacher', 
        belt: 'Black Belt', 
        pfpLink: 'https://pbs.twimg.com/media/E9sN5jzVUAUgYHn.png',
        bio: `Jiu-jitsu has taught me strength and discipline and a new way to live. I practice every day just because it's what I love to do.`, 
        beltLink: 'https://www.360-bjj.com/assets/images/belts/black.png'}

    const [userInfo, setUserInfo] = React.useState(startingInfo)
    const [modalEntry, setModalEntry] = React.useState(false)

    const saveAllDetails = () => {

        setModalEntry(false)
        localStorage.setItem('accountInfo', JSON.stringify(userInfo))
    }

    const refreshBeltImage = (belt) => {
        switch (belt) {
            case 'White Belt':
                setUserInfo({...userInfo, belt: belt, beltLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/BJJ_White_Belt.svg/1200px-BJJ_White_Belt.svg.png'})
                break;
            case 'Blue Belt':
                setUserInfo({...userInfo, belt: belt, beltLink: 'https://i.etsystatic.com/23635632/r/il/2eac12/2628660070/il_fullxfull.2628660070_rjmq.jpg'})
                break;
            case 'Purple Belt':
                setUserInfo({...userInfo, belt: belt, beltLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/BJJ_Purple_Belt.svg/1280px-BJJ_Purple_Belt.svg.png'})
                break;
            case 'Brown Belt':
                setUserInfo({...userInfo, belt: belt,beltLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/BJJ_Brown_Belt.svg/640px-BJJ_Brown_Belt.svg.png'})
                break;
            case 'Black Belt':
                console.log('hit')
                setUserInfo({...userInfo, belt: belt, beltLink: 'https://www.360-bjj.com/assets/images/belts/black.png'})
                break;
        }
        
    }

    React.useEffect(() => {
        const previousInfo = localStorage.getItem('accountInfo')
        if (previousInfo !== null) {
            setUserInfo(JSON.parse(previousInfo))
        }
    }, [])

    return (
    <Box sx={{display: 'flex', flexDirection: 'row'}}>
        <Card sx={{maxWidth: 300}}>
            <CardActionArea>
              <CardMedia sx={{height: 300, width: 300}} image={userInfo.pfpLink} title={"persons"+ "'s Picture"} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {userInfo.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {userInfo.role}
                </Typography>
                <Typography variant="body2" component="p">
                  {userInfo.belt}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={() => setModalEntry(true)}>
                Change Status
              </Button>
              <Button size="small" color="primary" onClick={() => setModalEntry(true)}> 
                Update Belt color
              </Button>
            </CardActions>
          </Card>
          <Box sx={{width: '80%', margin: '15px'}}>
              <Card sx={{padding: '15px'}}>
                  <img  width={200} src={userInfo.beltLink} />
                  <Typography>
                      Bio:
                  </Typography>
                  <Typography>
                    {userInfo.bio}
                  </Typography>
                  <CardActions>
              <Button size="small" color="primary" variant="contained" onClick={() => setModalEntry(true)}>
                Update Bio
              </Button>
            </CardActions>
              </Card>
          </Box>
          <Dialog open={modalEntry} fullWidth={true} onClose={() => setModalEntry(false)}>
             <DialogTitle>Edit User Account</DialogTitle>
             <DialogContent>
             <Box sx={{display: 'flex', flexDirection: 'column', height: '270px', justifyContent: 'space-between', marginTop: '10px'}}>
             <FormControl fullWidth>
                <InputLabel >Account Status</InputLabel>
                <Select
                value={userInfo.role}
                label="Account Status"
                onChange={(e) => setUserInfo({...userInfo, role: e.target.value})}
                >
                <MenuItem value={'Student'}>Student</MenuItem>
                <MenuItem value={'Teacher'}>Teacher</MenuItem>
                <MenuItem value={'Creator'}>Creator</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel >Belt Color</InputLabel>
                <Select
                value={userInfo.belt}
                label="Account Status"
                onChange={(e) => refreshBeltImage(e.target.value)}
                >
                <MenuItem value={'White Belt'}>White</MenuItem>
                <MenuItem value={'Blue Belt'}>Blue</MenuItem>
                <MenuItem value={'Purple Belt'}>Purple</MenuItem>
                <MenuItem value={'Brown Belt'}>Brown</MenuItem>
                <MenuItem value={'Black Belt'}>Black</MenuItem>
                </Select>
            </FormControl>
                 <TextField
                 required
                 id = "notes"
                 name = "notes"
                 label="Note Text"
                 variant="standard"
                 multiline
                 maxRows={8}
                 value={userInfo.bio}
                 onChange={(e) => setUserInfo({...userInfo, bio: e.target.value})}
                 />
                 </Box>
             </DialogContent>
             <DialogActions>
             <Button onClick={saveAllDetails}>Update Account</Button>
             </DialogActions>
        </Dialog>
    </Box>
    )

}