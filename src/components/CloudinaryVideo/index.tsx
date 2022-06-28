import * as React from 'react'
import { useRef } from 'react'
import { AdvancedVideo, Transformation } from '@cloudinary/react'
import { CloudinaryVideo } from '@cloudinary/url-gen'
import { videoCodec } from "@cloudinary/url-gen/actions/transcode"
import { auto, vp9 } from '@cloudinary/url-gen/qualifiers/videoCodec'
import VideoWrapper from './wrapper'

const Video = () => {
  const vid = new CloudinaryVideo('videos/angelina_jordan_suspicious_minds', {cloudName: 'mansbooks'})
	const videoEl = useRef()
	const sources = [
		{
			type: 'mp4',
			codecs: ['avc1.4d002a'],
			transcode: videoCodec(auto())
		},
		{
			type: 'webm',
			codecs: ['vp8', 'vorbis'],
			transcode: videoCodec(vp9())
		}];

  return (
    <>
      <VideoWrapper>        
        <AdvancedVideo cldVid={vid} sources={sources} className="w-full" ref={videoEl} controls />         
      </VideoWrapper>
    </>
  )
}

export default Video
