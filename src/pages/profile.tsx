import * as React from 'react'
import Layout from '@/components/layout'
import GithubProfile from '@/components/github-profile'
import WavyHr from '@/components/WavyHr'
import ScrollIndicator from '@/components/scroll-indicator'
import SEO from '@/components/seo'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Stars from '@/components/Stars'
import CloudinaryVideo from '@/components/CloudinaryVideo'

import OGImage from '../../static/images/jpg/dbbg.jpg'

function Profile() {
  const ogimage = {
    src: OGImage,
    width: 1342,
    height: 531,
  }
  return (
    <>
      <Layout>
        <SEO type="Profile" title="Profile" description="Github Profile" image={ogimage} />
        <Header transparent />
        <ScrollIndicator />
        <main>
          <Stars />
          <article className="m-10">
            <div className="mt-6 mb-6 text-center">
              <h2 className="text-4xl font-bold mt-2 mb-2 leading-tight">Github Profile</h2>
              <div className="mt-6 mb-6 text-center">
                <GithubProfile />
              </div>
            </div>
            <div className="mb-10">
              <CloudinaryVideo />
            </div>
            <div className="mb-20">
              <WavyHr className="text-indigo-600" />
            </div>
          </article>
        </main>
        
        <Footer />
      </Layout>
    </>
  )
}

export default Profile
