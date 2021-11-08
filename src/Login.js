import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { login } from './features/appSlice'
import { auth, provider } from './firebase'
import './login.css'


export default function Login() {

    const dispatch = useDispatch()
    const signIn = () => {
        auth.signInWithPopup(provider).then(result=>{
            dispatch(login({
                username:result.user.displayName,
                profilPic:result.user.photoURL,
                id:result.user.uid,
            }))
        }).catch(error => alert(error))
    }
    return (
        <div className="login">
            <div className="login_container">
                <img src="./snapchat.png" alt="" />
                <Button variant='outlined' onClick={signIn}>Sign-in</Button>
            </div>
            
        </div>
    )
}
