import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '@/components/layout'
import GithubProfile from '@/components/github-profile'
import Projects from '@/components/Projects'
import WavyHr from '@/components/WavyHr'
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
          <article className='grid grid-cols-2 gap-4 mb-10 ml-10 mr-10'>
            <div className="mt-6 mb-6 text-center">
              <h2 className="text-4xl font-bold mt-2 mb-2 leading-tight">
                 Github Profile
              </h2>
              <div className="mt-6 mb-6 text-center">
                <GithubProfile />
              </div>              
            </div> 
            <div className='mt-6 mb-6'>
              <h2 className="text-4xl font-bold mt-2 mb-2 leading-tight text-center">
                 Repos Newest
              </h2>
              <Projects />
            </div>             
          </article>                  
        </main>
        <WavyHr className='text-indigo-600' />  
        <Footer />
      </Layout>
    </>
  )
}

export default Profile