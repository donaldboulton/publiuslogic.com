import * as React from 'react'

import Layout from '@/components/layout'
import SEO from '@/components/seo'
import PageHero from '@/components/PageHero'
import BlogRoll from '@/components/blogroll'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ScrollIndicator from '@/components/scroll-indicator'

import Image from '@/svg/undraw/undraw_blog_post_re_fy5x.svg'
import OGImage from '@/images/undraw/undraw_Blog_post_re_fy5x.png'

const BlogPage = () => {
  const ogimage = {
    src: OGImage,
    width: 1342,
    height: 1024,
  }

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
      <main className="mt-10">
        <article className="post">
          <header>
            <PageHero title="Blog Posts" description="Articles published from time to time" image={Image} />
          </header>
        </article>
        <BlogRoll />
      </main>
      <Footer />
    </Layout>
  )
}

export default BlogPage
