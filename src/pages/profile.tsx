import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '@/components/layout'
import GithubProfile from '@/components/github-profile'
import ScrollIndicator from '@/components/scroll-indicator'

import Header from '@/components/header'
import Footer from '@/components/footer'

function Profile (props) {
  return (
    <>
      <Layout>
        <Header />
        <ScrollIndicator />
        <main>
          <article>
            <div className="mt-6 mb-16 flex flex-col items-center">
              <div className=" text-white light:text-black">
                <h1 className="text-4xl font-bold mt-2 mb-2 leading-tight">
                  Github Profile
                </h1>
                <GithubProfile />
              </div>
            </div>  
          </article>
        </main>
        <Footer />
      </Layout>
    </>
  )
}

export default Profile