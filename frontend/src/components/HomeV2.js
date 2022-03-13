import React from 'react';
import HomeCard from './HomeCard'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

const userInfo = JSON.parse(sessionStorage.getItem('userInfo'))

export default function HomePage() {

  return (
    <div >
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '20px'}}>
        <Typography sx={{ fontSize: 24 }}  gutterBottom>
            Welcome Back {userInfo.user_Fname}!
        </Typography>
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
        </Box>
      <Grid container  direction="row" wrap='wrap' spacing={2}>
        <Grid item xs>
          <HomeCard icon={process.env.PUBLIC_URL + '/journal-icon.png'} title="Journal" description="You haven't made a journal entry today." url={'/journal'}/>
        </Grid>
        <Grid item xs>
          <HomeCard icon={process.env.PUBLIC_URL + '/match-icon.svg'} title="Jiu Jitsu Matches" description={<span><strong>5</strong> matches have been uploaded since your last login</span>} url={'/match-review'} />
        </Grid>
      </Grid>
      <Grid container  direction="row" wrap='wrap' spacing={2}>
        <Grid item xs>
          <HomeCard icon={process.env.PUBLIC_URL + '/brain-icon.png'} title="Knowledge Center" description={<span><strong>2</strong> new techniques are available to learn</span>}  url={'/tplookup'}/>
        </Grid>
        <Grid item xs>
          <HomeCard icon={process.env.PUBLIC_URL + '/chat-icon.jpg'} title="Messaging" description={<span>You have <strong>8</strong> unread messages</span>} url={'/messages'}/>
        </Grid>
      </Grid>
    </div>
  );
}