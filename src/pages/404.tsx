import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '@/components/Layout'
import SEO from '@/components/Seo'
import PageHero from '@/components/PageHero'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import Image from '../../static/svg/undraw/undraw_page_not_found_re_e9o6.svg'
import OGImage from '../../static/images/undraw/undraw_Page_not_found_re_e9o6.png'

const NotFoundPage = () => {
  const ogimage = {
    src: OGImage,
    width: 1400,
    height: 450,
  }
  return (
    <Layout>
      <Header />
      <SEO type="page" title="404 Not Found" description="Not Found 404 Go Back" image={ogimage} pathname="/404" />
      <PageHero
        title="404: Not Found"
        description="You just hit a route that doesn&#39;t exist... the sadness."
        image={Image}
      />
      <div className="mt-10">
        <article className="post">
          <div className="mt-6 mb-16 flex flex-col items-center">
            <div className="text-white light:text-black">
              <Link
                to="/"
                className="inline-flex justify-center mr-2 py-2 px-4 text-white rounded-md transition ease-in-out delay-150 bg-fuchsia-500 hover:-translate-y-1 hover:scale-110 hover:bg-fuchsia-700 shadow-lg hover:shadow-fuchsia-700/50 duration-300"
              >
                Back to Home Page
              </Link>
              <Link
                to="/contact"
                className="inline-flex justify-center mr-2 py-2 px-4 text-white rounded-md transition ease-in-out delay-150 bg-fuchsia-500 hover:-translate-y-1 hover:scale-110 hover:bg-fuchsia-700 shadow-lg hover:shadow-fuchsia-700/50 duration-300"
              >
                Notify Us of the Error
              </Link>
              <h2 className="text-4xl font-bold mt-2 mb-2 leading-tight">404: Not Found</h2>
              <div>You just hit a route that doesn&#39;t exist... the sadness.</div>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </Layout>
  )
}

export default NotFoundPage
