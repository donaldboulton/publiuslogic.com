import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function DSG (props) {
  return (
    <>
      <Layout>
        <Header />
        <main>
          <article>
            <div className="mt-6 mb-16 flex flex-col items-center">
              <div className=" text-white light:text-black">                                
                <Link to='/blog/gatsby-version-four'>Back to Post</Link><br />
                <h1 className="text-4xl font-bold mt-2 mb-2 leading-tight">
                  DSG: Deferred Static Generation
                </h1>
                <p>This page was generated At Runtime!</p>
              </div>
            </div>  
          </article>
        </main>
        <Footer />
      </Layout>
    </>
  )
}
