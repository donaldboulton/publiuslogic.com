import * as React from 'react'
import { useState } from "react"
import PT from "prop-types"
import { useStaticQuery, graphql } from 'gatsby'
import { LightgalleryProvider, LightgalleryItem } from 'react-lightgallery'
import "lightgallery.js/dist/css/lightgallery.css"


function ImageGallery({ image, thumb, group, ...rest }) {
  const data = useStaticQuery(graphql`
    query CloudinaryImage {
      allCloudinaryMedia(sort: {fields: tags, order: ASC}) {
        edges {
          node {
            public_id
            resource_type
            secure_url
            tags
            context {
              custom {
                alt
                caption
              }
            }
          }
        }
      }
    }
  `)
  const clImages = data.allCloudinaryMedia.edges
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <LightgalleryProvider>
        {clImages.map((image, index) => (
           <LightgalleryItem key={`${index}-cl`} group='any' src={image.node.secure_url} thumb={image.node.secure_url}>
              <div className='mb-3 ml-3 mr-3 mt-3 p-2 bg-gray-700 light:bg-gray-200 rounded-lg'>
                <div className="z-10 bg-gradient-to-t from-gray-700"></div>
                  <img
                    className='w-full h-full object-cover rounded-lg shadow-md'
                    src={image.node.secure_url}
                    alt={image.node.context.custom.alt}
                    onClick={() => setOpen(true)}
                  />
                <div className="text-xl text-center font-medium italic mt-3" data-sub-html={image.node.context.custom.caption}>{image.node.context.custom.caption}</div>
              </div>
            </LightgalleryItem>
        ))}
      </LightgalleryProvider>
    </>
  )
}

ImageGallery.propTypes = {
  image: PT.string.isRequired,
  thumb: PT.string,
  group: PT.string.isRequired
};

export default ImageGallery