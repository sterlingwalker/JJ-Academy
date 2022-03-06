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
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { ChatList, MessageList, MessageBox, Input, Button } from 'react-chat-elements'
import 'react-chat-elements/dist/main.css';

export default function ChatRoom(props) {

    const names = [
        'Thomas H.',
        'Brian G.',
        'Kate M.',
        'Randy T.',
        'Ben A.']

    return (
        <Grid container spacing={2} sx={{height: '90px'}}>
            <Grid item xs={3} sx={{height: '90px'}}>
            <Paper>
                <Typography sx={{ fontSize: 20, textAlign: 'center', paddingTop: '10px' }}  gutterBottom>
                    Chats
                </Typography>
                <ChatList
                className='chat-list'
                dataSource={[
                    {
                        avatar: 'https://storage.needpix.com/rsynced_images/profile-2398782_1280.png',
                        title: 'Ben',
                        subtitle: 'What are you doing?',
                        date: new Date(),
                        unread: 1,
                    },
                    {
                        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2eN8ZS-WW7HqmiOGKHDdLV8qUEKOU5b3bZg&usqp=CAU',
                        title: 'Sensei Kyoto',
                        subtitle: 'It was good to see you last Thursday',
                        date: new Date(new Date() - 86400000),
                        unread: 0,
                    },
                    {
                        avatar: 'https://ps.w.org/metronet-profile-picture/assets/icon-256x256.png?rev=2464419',
                        title: 'Katelyn',
                        subtitle: 'Thanks for helping me on my sweeps.',
                        date: new Date(new Date() - 3*86400000),
                        unread: 0,
                    },
                    {
                        avatar: 'https://sidomexentertainment.com/wp-content/uploads/2021/02/Funny-head.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-2',
                        title: 'Frank',
                        subtitle: 'Do you know when the next session is?',
                        date: new Date(new Date() - 4*86400000),
                        unread: 0,
                    },
                    {
                        avatar: 'https://qph.fs.quoracdn.net/main-qimg-ab45488a5f2a231287ab232486154ae0-lq',
                        title: 'Hadeel',
                        subtitle: 'Make another progress report!',
                        date: new Date(new Date() - 8*86400000),
                        unread: 99,
                    },
                ]} />
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Card variant="outlined">
                <React.Fragment>
                <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2eN8ZS-WW7HqmiOGKHDdLV8qUEKOU5b3bZg&usqp=CAU" />
                </ListItemAvatar>
                <ListItemText
                primary='Sensei Kyoto'
                secondary={
                    <React.Fragment>
                    Leader of the Gym
                    </React.Fragment>
                }
                />
                </ListItem>
                </React.Fragment>
                    
                <MessageList
                    className='message-list'
                    lockable={true}
                    toBottomHeight={'100%'}
                    dataSource={[
                        {
                            position: 'right',
                            type: 'text',
                            text: 'Hey Sensei what\'s the deal?',
                            date: new Date(new Date() - 86400000),
                        },
                        {
                            position: 'left',
                            type: 'text',
                            text: 'Just reading up on some new techniques.',
                            date: new Date(new Date() - 86400000),
                        },
                        {
                            position: 'right',
                            type: 'text',
                            text: 'Sounds good, see you at practice Thursday.',
                            date: new Date(new Date() - 86400000),
                        },
                        {
                            position: 'left',
                            type: 'text',
                            text: 'See ya then',
                            date: new Date(new Date() - 86400000),
                        },

                    ]} />
                    <Input
                        placeholder="Type here..."
                        multiline={true}
                        rightButtons={
                            <Button
                                color='white'
                                backgroundColor='blue'
                                text='Send'/>
                        }/>
                </Card>
            </Grid>
                <Grid item xs={3}>
                <Paper>
                <Typography sx={{ fontSize: 20, textAlign: 'center', paddingTop: '10px' }}  gutterBottom>
                    Users Currently online
                </Typography>
                    <MenuList>
                        {names.map(name => (
                            <React.Fragment>

                                <MenuItem>
                                    <ListItemText>{name}</ListItemText>
                                </MenuItem>
                                <Divider />
                            </React.Fragment>
                        ))}
                    </MenuList>
                    </Paper>
                </Grid>
        </Grid>
    );

}