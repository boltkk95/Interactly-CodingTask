import React,{useRef} from "react";
import { useSelector } from "react-redux";
import "./Video.css"
import videoFunctions from "../../Components/videoFunction";
import {FaVolumeUp, FaVolumeMute}  from "react-icons/fa";
import { BiExitFullscreen, BiFullscreen } from "react-icons/bi";



 const VideoView = () => {
    const videoState = useSelector((state) => state.video.videoState)

    const videoElement = useRef(null);


  const {
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    toggleMute,
    handleVideoSpeed,
    handleFullScreen
  } = videoFunctions(videoElement);


    return (
        <div className="container">

            <input className="progress-input"
                type="range"
                min="0"
                max="100"
                value={videoState.progress}
                onChange={(e) => handleVideoProgress(e)}
                />
            <div className="video-wrapper">
                <video  loop  className="video-element"
                src={videoState.id}
                ref={videoElement}
                onTimeUpdate={handleOnTimeUpdate}
                onClick={
                    togglePlay}
                />
                <div className="video-buttons1">
                    <button
                        className={ videoState.speed===1 ? "velocity1 velocity2":"velocity1"}
                        onClick={(m)=>handleVideoSpeed(m)}>
                            {videoState.speed}x
                    </button>
                                
                    <button className={ !videoState.isMuted ? "velocity1 velocity2":"velocity1"} onClick={toggleMute}>
                        {videoState.isMuted ? (
                            <FaVolumeUp/>
                            ) : (
                            <FaVolumeMute/>
                            )}
                    </button>

                    <button className={ !videoState.isMuted ? "velocity1 velocity2":"velocity1"} onClick={handleFullScreen}>
                    {videoState.fullScreen ? (
                            <BiExitFullscreen/>
                            ) : (
                            <BiFullscreen/>
                            )}
                    </button>
                </div>
            </div>

            <img src="/Assets/play-img.png" alt="playbuttonimage" onClick={togglePlay} className={!videoState.isPlaying ? "":"play-img"}/>
            
      </div>
    )
} 

export default VideoView