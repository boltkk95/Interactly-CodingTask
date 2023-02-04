import { useSelector, useDispatch } from "react-redux";
import { progress, playing, mute, speed } from "../Features/Video/VideoSlice";
import { useEffect } from "react";

const VideoFunctions = (videoElement) => {
    const videoState = useSelector((state) => state.video.videoState);
    const dispatch = useDispatch();

    const togglePlay = () => {
       dispatch(playing())
      };

      useEffect(() => {
        videoState.isPlaying
          ? videoElement.current.play()
          : videoElement.current.pause();
      }, [videoState.isPlaying, videoElement]);

      const handleOnTimeUpdate = () => {
        const progress1 = (videoElement.current.currentTime / videoElement.current.duration) * 100 || 0;
        console.log(progress1);
        dispatch(progress(progress1))
      };

      const handleVideoProgress = (event) => {
        const manualChange = Number(event.target.value);
        videoElement.current.currentTime = (videoElement.current.duration / 100) * manualChange;
        dispatch(progress(manualChange))
      };

      const toggleMute = () => {
        dispatch(mute())
      };
    
      useEffect(() => {
        videoState.isMuted
          ? (videoElement.current.muted = true)
          : (videoElement.current.muted = false);
      }, [videoState.isMuted, videoElement]);

      const handleVideoSpeed = () => {
        let speed1 =videoState.speed;
        if (speed1===1){ speed1 =1.5
        }else if (speed1===1.5) { speed1 = 2
        }else{ speed1 = 1}

        videoElement.current.playbackRate = speed1;
        dispatch(speed(speed1))
        
      };

      const handleFullScreen = () => {
        
        if (videoElement.current.requestFullscreen) {
            videoElement.current.requestFullscreen();
          } else if (videoElement.current.msRequestFullscreen) {
            videoElement.current.msRequestFullscreen();
          } else if (videoElement.current.mozRequestFullScreen) {
            videoElement.current.mozRequestFullScreen();
          } else if (videoElement.current.webkitRequestFullscreen) {
            videoElement.current.webkitRequestFullscreen();
          }
      }


    return {
        
            togglePlay,
            handleOnTimeUpdate,
            handleVideoProgress,
            handleVideoSpeed,
            handleFullScreen,
            toggleMute}
    
    
} 

export default VideoFunctions