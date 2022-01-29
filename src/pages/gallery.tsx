import * as React from 'react'

import Layout from '@/components/layout'
import SEO from '@/components/seo'
import PageHero from '@/components/PageHero'
import ImageGallery from "@/components/image-gallery"
import Image from '../../static/svg/undraw/undraw_portfolio_re_qwm5.svg'
import OGImage from '../../static/images/undraw/undraw_Portfolio_re_qwm5.png'
import ScrollIndicator from '@/components/scroll-indicator'
import Header from '@/components/header'
import Footer from '@/components/footer'

const Gallery = ({ images: defaultImages, nextCursor: defaultNextCursor, totalCount: defaultTotalCount, folders }) => {
  const ogimage = {
    src: OGImage,
    width: 1342,
    height: 1024,
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
                <div className="grid gap-x-4 gap-y-2 grid-cols-3">                    
                  <ImageGallery />
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </Layout>
  )
}

export default Gallery