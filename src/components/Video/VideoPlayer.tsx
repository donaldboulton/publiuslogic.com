import * as React from 'react'

interface VideoPlayerProps {
  poster?: string
  controls?: boolean
  loop?: boolean
  width?: number
  height?: number
  src: string
}

const VideoPlayer = ({ controls, loop, width, height, poster, src }: VideoPlayerProps) => {
  return (
    <div className="flex w-full">
      <video
        className="rounded-xl"
        poster={poster}
        width={width}
        height={height}
        controls={controls}
        loop={loop || false}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  )
}

export default VideoPlayer
