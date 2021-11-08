import { Avatar } from '@mui/material'
import './profile.css'
import StopIcon from '@mui/icons-material/Stop';
import ReactTimeago from 'react-timeago';
import { useDispatch } from 'react-redux';
import { SelectImage } from './features/appSlice';
import { db } from './firebase';
import { useNavigate } from 'react-router';


export default function Profile({id , username , timesTamp , imageUrl , read , profilPic}) {
    const dispatch= useDispatch()
    const navigate = useNavigate()

    const open = () => {
        if(!read){
            dispatch(SelectImage(imageUrl))
            db.collection('posts').doc(id).set({
                read:true
            },{merge:true}
            );
            
        }
        dispatch(SelectImage(imageUrl))
        navigate('/chat/View')
    }
    return (
        <div onClick={open} className="profile">
            <Avatar src={profilPic} />
            <div className="profile_info">
                <h4>{username}</h4>
                <p> {!read && "Tap to view -"} <ReactTimeago date= {timesTamp?.toUTCString()} /> </p>
            </div>
            {!read && <StopIcon className="profile_readIcon"/>}
        </div>
    )
}
