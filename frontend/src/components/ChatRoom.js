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

    const chatList = [{
        avatar: 'https://storage.needpix.com/rsynced_images/profile-2398782_1280.png',
        title: 'Thomas',
        subtitle: 'You ready for this tournament?',
        date: new Date(),
        unread: 1,
        onClick: () => sendInputToThread()
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
    }]

    const senSeiMessages = [
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

    ]

    const thomasMessages = [
        {
            position: 'right',
            type: 'text',
            text: 'Hey Thomas I just wanted to congratlate you on your new black belt!',
            date: new Date(new Date() - 86400000),
        },
        {
            position: 'left',
            type: 'text',
            text: 'Thanks, it was a long time coming.',
            date: new Date(new Date() - 86400000),
        },
        {
            position: 'right',
            type: 'text',
            text: 'What do you recommend is the best way to for a newbie like me to get to your level.',
            date: new Date(new Date() - 86400000),
        },
        {
            position: 'left',
            type: 'text',
            text: 'Spend lots of time on the armbar, it helps!',
            date: new Date(new Date() - 86400000),
        },
        {
            position: 'right',
            type: 'text',
            text: 'Cool, thanks for the help.',
            date: new Date(new Date() - 86400000),
        },
        {
            position: 'left',
            type: 'text',
            text: 'Anytime dude, see ya later',
            date: new Date(new Date() - 86400000),
        },
        {
            position: 'right',
            type: 'text',
            text: 'Alr see ya',
            date: new Date(new Date() - 86400000),
        },
        {
            position: 'left',
            type: 'text',
            text: 'You ready for this tournament?',
            date: new Date(),
        },
    ]

    const katelynMessages = [
        {
            position: 'right',
            type: 'text',
            text: 'Just uploaded our match to the Match Review page, it was nice fighting with you today.',
            date: new Date(new Date() - 86400000),
        },
        {
            position: 'left',
            type: 'text',
            text: 'Ofcourse and thanks, we\'ll definitely need a rematch.',
            date: new Date(new Date() - 86400000),
        },
        {
            position: 'right',
            type: 'text',
            text: 'You\'re welcome and fr I can\'t wait',
            date: new Date(new Date() - 86400000),
        },

    ]

    const frankMessages = [
        {
            position: 'left',
            type: 'text',
            text: 'Do you know when the next session will be?',
            date: new Date(new Date() - 86400000),
        }
    ]

    const thomasInfo = {name: 'Thomas', bio: 'All-new black belt champion', data: thomasMessages, img: 'https://storage.needpix.com/rsynced_images/profile-2398782_1280.png'}
    const senseiInfo = {name: 'Sensei Kyoto', bio: 'Leader of the Gym', data: senSeiMessages, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2eN8ZS-WW7HqmiOGKHDdLV8qUEKOU5b3bZg&usqp=CAU'}
    const katelynInfo = {name: 'Katelyn', bio: 'Jiu Jitsu Queen', data: katelynMessages, img: 'https://ps.w.org/metronet-profile-picture/assets/icon-256x256.png?rev=2464419'}
    const frankInfo = {name: 'Frank', bio: 'Yall Im just here', data: frankMessages, img: 'https://sidomexentertainment.com/wp-content/uploads/2021/02/Funny-head.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-2'}

    const [chats, setChats] = React.useState(chatList)
    const [messageThread, setMessageThread] = React.useState(senSeiMessages)
    const [chatInput, setChatInput] = React.useState('')
    const [isReady, setIsReady] = React.useState(true)
    const [recipientInfo, setRecipientInfo] = React.useState(senseiInfo)
    const [textLoading, setTextLoading] = React.useState(false)
    const [msgCounter, setMsgCounter] = React.useState(0)

    const sendInputToThread = () => {
        const newMessage = {
            position: 'right',
            type: 'text',
            text: chatInput,
            date: new Date(),
        }
        //To basically destroy and remake the input component, lol very hacky shhh
        setIsReady(false)
        setTimeout(() => {
            setIsReady(true)
        }, 100);

        setChatInput('')
        const thrd = [...messageThread, newMessage]
        setMessageThread(thrd)
        
        if (recipientInfo.name == 'Thomas' && msgCounter == 0) {
            setTimeout(() => {
                setTextLoading(true)
                setTimeout(() => {
                    setMessageThread([...thrd, {position: 'left', type: 'text', text: 'I think next Thursday', date: new Date()}])
                    setTextLoading(false)
                    setMsgCounter(msgCounter + 1)
                }, 8000)
            }, 2000)
        }
        
        if (recipientInfo.name == 'Thomas' && msgCounter == 1) {
            setTimeout(() => {
                setTextLoading(true)
                setTimeout(() => {
                    setMessageThread([...thrd, {position: 'left', type: 'text', text: 'Np see ya there', date: new Date()}])
                    setTextLoading(false)
                    setMsgCounter(msgCounter + 1)
                }, 2500)
            }, 1200)
        }
    }

    const bringUpMessages = (name) => {
        console.log(name)
        if (name == 'Thomas') {
            setRecipientInfo(thomasInfo)
            setMessageThread(thomasMessages)
            let newChats = chats
            newChats[0].unread = 0
            setChats(newChats)
        }
        if (name == 'Sensei Kyoto') {
            setRecipientInfo(senseiInfo)
            setMessageThread(senSeiMessages)
        }
        if (name == 'Katelyn') {
            setRecipientInfo(katelynInfo)
            setMessageThread(katelynMessages)
        }
        if (name == 'Frank') {
            setRecipientInfo(frankInfo)
            setMessageThread(frankMessages)
        }
    }

    return (
        <Grid container spacing={2} sx={{height: '90px'}}>
            <Grid item xs={3} sx={{height: '90px'}}>
            <Paper>
                <Typography sx={{ fontSize: 20, textAlign: 'center', paddingTop: '10px' }}  gutterBottom>
                    Chats
                </Typography>
                <ChatList
                className='chat-list'
                dataSource={chats}
                onClick={(e) => bringUpMessages(e.title)} />
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Card variant="outlined">
                <React.Fragment>
                <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar  src={recipientInfo.img} />
                </ListItemAvatar>
                <ListItemText
                primary={recipientInfo.name}
                secondary={
                    <React.Fragment>
                    {recipientInfo.bio}
                    </React.Fragment>
                }
                />
                </ListItem>
                </React.Fragment>
                    
                <MessageList
                    className='message-list'
                    lockable={true}
                    toBottomHeight={'100%'}
                    dataSource={messageThread}
                     />

                    {textLoading && <img width={75} style={{marginTop: '15px', marginLeft: '15px'}} src="https://c.tenor.com/H85DmEXYpEEAAAAM/im-gay-message.gif" />}
                    
                    {isReady &&
                    <Input
                        placeholder="Type here..."
                        multiline={true}
                        onChange={(e) => setChatInput(e.target.value)}
                        rightButtons={
                            <Button
                                color='white'
                                backgroundColor='blue'
                                onClick={sendInputToThread}
                                text='Send'/>
                        }/>
                    }
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