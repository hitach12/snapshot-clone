import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import './ChatView.css'
import { selectImage } from './features/appSlice'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export default function ChatView() {

    const selectedImage = useSelector(selectImage)
    const navigate = useNavigate()

    useEffect(() => {
        if(!selectedImage){
            exit();
        }
    } ,[selectedImage])

    const exit = () => {
        navigate("/chat")
    }
    return (
        <div className="chatView">
        <img src={selectedImage} onClick={exit} alt="" />
        <div className="chatView_timer">
        <CountdownCircleTimer
    isPlaying
    duration={10}
    strokeWidth={6}
    colors={[
      ['#004777', 0.33],
      ['#F7B801', 0.33],
      ['#A30000', 0.33],
    ]}
    size={50}

  >
    {({ remainingTime }) => {
    if(remainingTime==0){
        exit()
    }
    return remainingTime}}
  </CountdownCircleTimer>
        </div>
        

        </div>
    )
}
