import React, { useEffect } from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Preview from './Preview';
import Chat from './Chat';
import ChatView from './ChatView';
import { useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/appSlice';
import { useDispatch } from 'react-redux';
import Login from './Login';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=> {
      if(authUser){
        dispatch(login({
          username:authUser.displayName,
          profilPic:authUser.photoURL,
          id:authUser.uid,
      }))
      }else {
        dispatch(logout())
      }
    })
  } , [])

  return (
    
      
     
    <div className="App">
      <Router>

        {!user? <Login/> : (
            <>
          <img className="app_logo" src="./snapchat.png" alt="" />
        
        <div className="app_body">
      <div className="app_bodyBackground">
      <Routes>
        
        <Route path='/' element={<WebcamCapture/>}/>
        <Route path='/preview' element={<Preview/>}/>
        <Route initial path='/chat' element={<Chat/>}/>
        <Route path='/chat/view' element={<ChatView/>}/>
      </Routes>
      </div>
      
     
      </div>

          </>
        )}
      
      
     
      </Router>
    </div>
    
    

  );
}

export default App;
