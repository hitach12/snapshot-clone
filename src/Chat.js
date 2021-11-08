import { Avatar, IconButton } from '@mui/material'
import './chat.css'
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { useEffect, useState } from 'react';
import { auth, db } from './firebase';
import Profile from './Profile';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/appSlice';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { useNavigate } from 'react-router';
import { resetCameraImage } from './features/cameraSlice';


export default function Chat() {
    const [posts , setPosts]=useState([])
    const user = useSelector(selectUser)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const takeSnap = () => {
        dispatch(resetCameraImage())
        navigate('/')
    }

    useEffect(() => {
        db.collection('posts').orderBy('timesTamp','desc').onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({
                id:doc.id,
                data:doc.data()
            })))
        })
    
    },[])
    return (
        <div className="chat">
            <div className="chat_header">
                <IconButton onClick={() => auth.signOut()}>
                <Avatar src={user.profilPic} className="chat_avatar" />
                </IconButton>
                <div className="chat_search">
                <SearchIcon className="chat_searchIcon"/>
                <input placeholder="Friends" type="text" />
                </div>
                <ChatBubbleIcon className="chat_chatIcon"/>
            </div>
            <div className="chat_posts">
            {posts.map(({id , data : {username , timesTamp , imageUrl , read ,profilPic}} ) => (
                <Profile
                key={id}
                id={id}
                username={username}
                timesTamp={new Date(timesTamp?.toDate().toUTCString())}
                imageUrl={imageUrl}
                read={read}
                profilPic={profilPic}/>
            ))}
            </div>
            <RadioButtonUncheckedIcon
            className="chat_takePicIcon"
            fontSize="large"
            onClick={takeSnap}/>
        </div>
    )
}
