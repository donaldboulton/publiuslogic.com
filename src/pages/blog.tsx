import * as React from 'react'
import Layout from '@/components/Layout'
import SEO from '@/components/Seo'
import PageHero from '@/components/PageHero'
import BlogRoll from '@/components/BlogRoll'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollIndicator from '@/components/ScrollIndicator'
import ScrollDown from '@/components/ScrollDown'
import Stars from '@/components/Stars'

import Image from '../../static/svg/undraw/undraw_blog_post_re_fy5x.svg'
import OGImage from '../../static/images/undraw/undraw_Blog_post_re_fy5x.png'

const ogimage = {
  src: OGImage,
  width: 1400,
  height: 450,
}

const BlogPage = () => {
  return (
    <Layout>
      <SEO
        type="page"
        title="Blog Posts"
        description="Articles published from time to time"
        image={ogimage}
        pathname="/blog"
      />
      <Header />
      <ScrollIndicator />
      <div>
        <div className="mt-10">
          <Stars />
          <article className="post">
            <header>
              <PageHero title="Blog Posts" description="Articles published from time to time" image={Image} />
            </header>
          </article>
          <BlogRoll />
        </div>
      </div>
      <ScrollDown
        className="scroll z-20 right-4 md:right-3 top-20"
        size={40}
        css="position: fixed; color: gray; width: 40px; height: 40px;"
      />
      <Footer />
    </Layout>
  )
}

export default BlogPage
