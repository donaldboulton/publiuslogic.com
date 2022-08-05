import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Callout from '@/components/Callout'
import SEO from '@/components/Seo'
import PageHero from '@/components/PageHero'

import OGImage from '../../static/assets/DSG_for_blog_article_and_G4_overview_page.jpg'
import PageImage from '../../static/assets/DSG_for_blog_article_and_G4_overview_page.jpg'

const ogimage = {
  src: OGImage,
  width: 1342,
  height: 531,
}

export default function DSG() {
  return (
    <>
      <Layout>
        <SEO
          type="dsg"
          title="Deferred Static Generation"
          description="PubliusLogic topics on Law Congress Programing and Human Anything."
          image={ogimage}
          pathname="/dsg"
        />
        <Header />
        <main>
          <article>
            <header>
              <PageHero title="DSG" description="Deferred Static Generation." image={PageImage} />
            </header>
            <div className="mt-6 mb-16 flex flex-col items-center">
              <div className="text-white light:text-black">
                <Link to="/blog/gatsby-version-four">Back to Post</Link>
                <br />
                <h1 className="text-4xl font-bold mt-2 mb-2 leading-tight">DSG: Deferred Static Generation</h1>
                <Callout variant="danger">This page was generated At Runtime!</Callout>
              </div>
            </div>
          </article>
        </main>
        <Footer />
      </Layout>
    </>
  )
}
