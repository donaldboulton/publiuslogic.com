import * as React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby" 
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import SEO from '@/components/seo'
import Search from '@/components/Algolia/search'
import PageHero from '@/components/PageHero'
import { ArrowLeftIcon } from '@heroicons/react/outline'
import ScrollIndicator from '@/components/scroll-indicator'

import Image from '../../static/svg/undraw/undraw_super_thank_you_re_f8bo.svg'
import OGImage from '../../static/images/undraw/undraw_Super_thank_you_re_f8bo.png'

const searchIndices = [{ name: `Posts`, title: `Posts` }]

const SearchPage = () => {
  const ogimage = {
    src: OGImage,
    width: 1342,
    height: 1024,
  }
  return (
    <>
      <Layout>
        <SEO
          type="page"
          title="Search"
          description="Click on each tag to view blog posts containing tag."
          image={ogimage}
          pathname="/search"
        />
        <Header />
        <ScrollIndicator />
        <main className="mt-10">        
          <article>
            <header>
              <PageHero
                title="Search Page"
                description="Type in the search box to get instant results."
                image={Image}
              />
            </header>          
            <div className="mt-16 mb-16 sm:mt-2 p-8 bg-gray-900 light:bg-white text-white light:text-black">                       
              <div className='mb-2'>
                <Search indices={searchIndices} />
              </div>              
            </div>
          </article>
        </main>
        <Footer />
      </Layout>
    </>
  )
}

export default SearchPage