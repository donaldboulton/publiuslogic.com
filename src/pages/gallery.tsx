import * as React from 'react'
import { graphql } from 'gatsby'
import type { HeadProps } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import Gallery from '@browniebroke/gatsby-image-gallery'
import Layout from '@/components/Layout'
import SEO from '@/components/Seo'
import PageHero from '@/components/PageHero'
import Image from '../../static/svg/undraw/undraw_portfolio_re_qwm5.svg'
import OGImage from '../../static/images/undraw/undraw_Portfolio_re_qwm5.png'
import ScrollIndicator from '@/components/ScrollIndicator'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { LazyMotion, m } from 'framer-motion'

const loadFeatures = () => import('@/components/FramerFeatures').then(res => res.default)

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

const ogimage = {
  src: OGImage,
  width: 1400,
  height: 450,
}

const ImageGallery: React.FC<PageProps> = ({ data }) => {
  const images = data.images.edges.map(({ node }, index) => ({
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
      <Header />
      <PageHero title="Gallery: Images" description="My personal Images from History!" image={Image} />
      <ScrollIndicator />
      <LazyMotion features={loadFeatures}>
        <m.div className="mt-10">
          <article className="post">
            <div className="max-w-7xl mt-16 mb-32 mx-auto bg-gray-900 light:bg-gray-300 text-white light:text-black rounded-xl shadow-md overflow-hidden md:max-w-5xl">
              <div className="md:flex">
                <div className="container mx-auto">
                  <Gallery
                    className="rounded-lg"
                    images={images}
                    lightboxOptions={lightboxOptions}
                    customWrapper={CustomWrapper}
                    onClose={onClose}
                  />
                </div>
              </div>
            </div>
          </article>
        </m.div>
      </LazyMotion>
      <Footer />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ImagesForGallery {
    images: allFile(filter: { relativeDirectory: { eq: "gallery" } }, sort: { fields: name }) {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(width: 250, height: 250, placeholder: BLURRED)
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
          name
        }
      }
    }
  }
`

export default ImageGallery

export function Head(props: HeadProps) {
  return (
    <>
      <SEO type="Gallery" title="Gallery: Images" description="History Pics" image={ogimage} pathname="/gallery">
        <script>
          if (typeof document !== `undefined`) {
            function onSubmit(token) {document.getElementById('subscriptions').submit()}
          }
        </script>
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        <link rel="rss" type="application/rss+xml" title="Rss" href="/rss.xml" />
      </SEO>
    </>
  )
}
