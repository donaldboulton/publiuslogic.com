import * as React from 'react'
import { useRef } from 'react'
import './video.css'
import { VolumeUpIcon, VolumeOffIcon, PlayIcon, PauseIcon } from '@heroicons/react/solid'
import video from '../../../static/video/andrerieu.mp4'
import useVideoPlayer from '../../hooks/useVideoPlayer'

const Video = () => {
  const videoElement = useRef(null)
  // https://dev.to/franciscomendes10866/how-to-create-a-video-player-in-react-40jj
  const { playerState, togglePlay, handleOnTimeUpdate, handleVideoProgress, handleVideoSpeed, toggleMute } =
    useVideoPlayer(videoElement)
  return (
    <div className="video-container fullscreen-bg">
      <div className="video-wrapper w-full fullscreen-bg__video">
        <video
          className="rounded-xl"
          controls
          autoPlay
          src={video}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
        />
        <div className="controls hidden">
          <div className="actions">
            <button onClick={togglePlay}>
              {!playerState.isPlaying ? <PlayIcon className="w-7 h-7" /> : <PauseIcon className="w-7 h-7" />}
            </button>
          </div>
          <input type="range" min="0" max="100" value={playerState.progress} onChange={e => handleVideoProgress(e)} />
          <select className="velocity" value={playerState.speed} onChange={e => handleVideoSpeed(e)}>
            <option value="0.50">0.50x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="2">2x</option>
          </select>
          <button className="mute-btn" onClick={toggleMute}>
            {!playerState.isMuted ? <VolumeUpIcon className="w-6 h-6" /> : <VolumeOffIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Video
