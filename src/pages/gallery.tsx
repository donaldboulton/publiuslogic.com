import { graphql } from 'gatsby'
import * as React from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import Gallery from '@browniebroke/gatsby-image-gallery'
import Layout from '@/components/layout'
import SEO from '@/components/seo'
import PageHero from '@/components/PageHero'
import Image from '../../static/svg/undraw/undraw_portfolio_re_qwm5.svg'
import OGImage from '../../static/images/undraw/undraw_Portfolio_re_qwm5.png'
import ScrollIndicator from '@/components/scroll-indicator'
import Header from '@/components/header'
import Footer from '@/components/footer'

interface ImageSharpEdge {
  node: {
    childImageSharp: {
      thumb: IGatsbyImageData
      full: IGatsbyImageData
    }
  }
}

interface PageProps {
  data: {
    images: {
      edges: ImageSharpEdge[]
      name: string
    }
  }
}
const CustomWrapper = ({ children, onClick }) => (
  <div className="p-1 bg-gray-900 light:bg-gray-200 rounded-lg" onClick={onClick}>
    {children}
  </div>
)

const ImageGallery: React.FC<PageProps> = ({ data }) => {

  const ogimage = {
    src: OGImage,
    width: 1342,
    height: 1024,
  }
  const images = data.images.edges.map(({ node }, index, name) => ({
    ...node.childImageSharp,
    // Generate name based on the index as caption.
    caption: `Image ${index}`,
  }))

  // Override some of Lightbox options to localise labels in French
  const lightboxOptions = {
    imageLoadErrorMessage: 'Cannot Load image',
    nextLabel: 'Next',
    prevLabel: 'Previous',
    zoomInLabel: 'Zoom',
    zoomOutLabel: 'Zoom Out',
    closeLabel: 'Close',
  }

  //Add callback to Lightbox onCloseRequest
  const onClose = () => {
    console.log('Lightbox was closed')
  }

  return (
    <Layout>
      <SEO
        type="Gallery"
        title="Gallery: Images"
        description="History Pics"
        image={ogimage}
        pathname="/gallery"
      />
      <Header />
      <PageHero
        title="Gallery: Images"
        description="My personal Images from History!"
        image={Image}
      />
      <ScrollIndicator />
      <main className="mt-10">
        <article className="post">
          <div className="max-w-7xl mt-16 mb-32 mx-auto bg-gray-900 light:bg-gray-300 text-white light:text-black rounded-xl shadow-md overflow-hidden md:max-w-5xl">
            <div className="md:flex">
              <div className="container mx-auto">                                   
                <Gallery
                  className='rounded-lg'
                  images={images}
                  lightboxOptions={lightboxOptions}
                  customWrapper={CustomWrapper}
                  onClose={onClose}
                />
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ImagesForGallery {
    images: allFile(
      filter: { relativeDirectory: { eq: "gallery" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 250
              height: 250
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
          name
        }
      }
    }
  }
`

export default ImageGallery