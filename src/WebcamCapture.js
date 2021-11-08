import React, { useCallback, useRef, useState } from 'react'
import './WebcamCapture.css'
import Webcam from "react-webcam";
import RadioButtonUncheckedTwoToneIcon from '@mui/icons-material/RadioButtonUncheckedTwoTone';
import { useDispatch } from 'react-redux';
import { setCameraImage } from './features/cameraSlice';
import { useNavigate } from 'react-router';

const videoConstraints = {
    width:250,
    height:400,
    facingMode:'user',
}

export default function WebcamCapture() {

    const navigate = useNavigate()
    const ref = useRef(null)
    const dispatch = useDispatch()
    const capture = useCallback(() => {
        const imageSrc = ref.current.getScreenshot();
        console.log(imageSrc)
        dispatch(setCameraImage(imageSrc))
        navigate('/preview')

        
    },[ref])
    const[image,setImage]=useState(null)

    
    return (
        <div className='webcamCapture'>
            <Webcam
            audio={false}
            height={videoConstraints.height}
            ref={ref}
            screenshotFormat='image/jpeg'
            width={videoConstraints.width}
            videoConstraints={videoConstraints}
            />

            <RadioButtonUncheckedTwoToneIcon
            className="webcamCapture_button"
            onClick={capture}
            fontSize="large"
            />

            <img src={image} alt="" />
        </div>
    )
}
