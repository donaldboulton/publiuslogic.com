import * as React from 'react'
import { Video, Transformation } from 'cloudinary-react'

const CloudinaryVideo = () => {
  return (
    <>
      <Video
        publicId="videos/angelina_jordan_suspicious_minds"
        cloudName="mansbooks"
        controls={true}
        fluid={true}
        preload="none"
        crop="scale"
        className="w-full"
        fallbackContent="Your browser does not support HTML5 video tags"
        poster={{
          gravity: 'north',
          startOffset: '28',
          transformation: [{ effect: 'sepia', fetchFormat: 'auto' }],
        }}
        sourceTransformation={{
          webm: { quality: '70' },
          mp4: { overlay: 'text:verdana_30:Ange!' },
        }}
      >
        <Transformation overlay="text:arial_20:Angelina%20Jordan" color="red" gravity="north" y="12" />
      </Video>
    </>
  )
}

export default CloudinaryVideo
