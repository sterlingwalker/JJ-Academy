import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import json from '../topics.json'
import Quiz from 'react-quiz-component';
import quiz from '../quiz.json'



export default function TopicLookup(props) {

  const [toggle, setToggle] = React.useState(false)

    const categoryInfo = [
        {title: 'Sweeps', url: 'https://i.ytimg.com/vi/qp5AXBHxQec/maxresdefault.jpg', desc: 'A BJJ sweep allows a guard player to improve his or her position by disrupting an opponent\'s balance and transitioning to a more dominant position.'},
        {title: 'Takedowns', url: 'https://cdn.evolve-mma.com/wp-content/uploads/2019/01/BJJ-Takedown-1024x577.jpg', desc: 'Takedowns are one of the reasons that a wrestler or Judoka who is new to BJJ may improve at a faster speed than a pure newcomer, as it can take years to learn and become proficient at takedowns.'},
        {title: 'Frames', url: 'https://www.grapplearts.com/wp-content/uploads/2019/11/2-things-for-the-BJJ-Beginner.png', desc: 'At the simplest level, a frame is a part of your body that is used to create and maintain space.'},
        {title: 'Submissions', url: 'https://bjj-world.com/wp-content/uploads/2018/09/artilheiro_2_1024x1024-1.jpg', desc: 'In BJJ, a “submission” is a technique, that when executed successfully, will control, maim, hurt, or subdue. '}]

    return (
      <React.Fragment>
        {toggle ? <TopicContent title={json[0].title} author={json[0].author} text={json[0].text} link={json[0].link} /> : 
        <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
            <Grid item>
            <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, marginBottom: '25px' }}
            >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Jiu Jitsu Topics"
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            </Paper>
            </Grid>
            <Grid container spacing={5} direction="row" justifyContent="center" alignItems="center"  >
                {categoryInfo.slice(0,2).map(cat => (
                    <Grid onClick={() => setToggle(true)} item>
                        <TopicCard url={cat.url} title={cat.title} desc={cat.desc} />
                    </Grid>
                ))}
            </Grid>
            <br />
            <br />
            <Grid container spacing={5} direction="row" justifyContent="center" alignItems="center" >
                {categoryInfo.slice(-2).map(cat => (
                    <Grid item>
                        <TopicCard url={cat.url} title={cat.title} desc={cat.desc} />
                    </Grid>
                ))}
            </Grid>
        </Grid>
      }
      </React.Fragment>
    )

}

function TopicCard(props) {
    return (
      <Card sx={{ maxWidth: 345, height: '300px' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            alt="green iguana"
            src={props.url}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
}

function TopicContent(props) {


  return (
      <Card variant="outlined">
                  <CardContent>
                      <Typography sx={{ fontSize: 24 }}  gutterBottom>
                           {props.title}
                      </Typography>
                      <Typography sx={{ fontSize: 18 }}  gutterBottom>
                          {'Created By: ' + props.author}
                      </Typography >
                      {props.text.split('<br />').map(paragraph => <p>{paragraph} <br /></p>)}
                      <br></br>
                      {props.link  && <iframe width="960" height="480" src={props.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
                      
                  </CardContent>
                  
                  <Quiz quiz={quiz}/>
              </Card>
  );
}