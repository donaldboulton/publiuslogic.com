import * as React from 'react'
import type { HeadProps } from 'gatsby'
import Layout from '@/components/Layout'
import GithubProfile from '@/components/GithubProfile'
import WavyHr from '@/components/WavyHr'
import ScrollIndicator from '@/components/ScrollIndicator'
import SEO from '@/components/Seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CloudinaryVideo from '@/components/CloudinaryVideo'
import Center from '@/components/Center'
import OGImage from '../../static/images/jpg/dbbg.jpg'
import Spacer200 from '../../static/img//spacer-200.jpg'
import { LazyMotion, m } from 'framer-motion'

const loadFeatures = () => import('@/components/FramerFeatures').then(res => res.default)

const ogimage = {
  src: OGImage,
  width: 1400,
  height: 450,
}

function Profile() {
  const spacer200 = {
    src: Spacer200,
    width: 1400,
    height: 200,
  }
  return (
    <>
      <Layout>
        <Header transparent />
        <ScrollIndicator />
        <LazyMotion features={loadFeatures}>
          <m.div>
            <article className="mb-11">
              <div className="mt-6 mb-6 text-center">
                <h2 className="text-4xl font-bold mt-2 mb-2 leading-tight">Github Profile</h2>
                <div className="mt-6 mb-6 text-center">
                  <GithubProfile />
                </div>
              </div>
              <div
                image={spacer200}
                className="my-10 pt-10 right-0 w-full absolute overflow-hidden bg-transparent"
              ></div>
              <div className="mt-10 pt-10 right-0 bottom-10 w-full absolute pointer-events-none overflow-hidden bg-transparent transition-all duration-200 left-1/2 transform -translate-x-1/2 scale-x-[-1]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink"
                  width="2560"
                  height="200"
                  viewBox="0 0 2560 200"
                  className="fill-blue-50 stroke-blue-500 dark:fill-transparent"
                >
                  <path
                    stroke-width="2"
                    d="M26 106 0 23-7-1v211h2577V23l-32 118-27-8-27-50-27-19-28 33-27 68-26 15-28-55-26 16-27-27-27-43-27 47-27 18-28-60-25 89-29 8-26-40-27-69-29-32-25-8-27 47-28 38-27-12-27-44h-27l-26 18-27 43-27 15-27-24-28-67-26-28-28-7-25 93-26-32-29-4-28 100-26-24-27 37-27-28-27-16-27 53-28-60-26 23-27-23-27-8-27 42-27 26-27-77-28 17-27-13-26 58-28-11-27 11-27-31-27-22-27 42-27-11-27 28-26 15-27-66-28-13-26-71-27 10-28-21-27 109-27-30-27 8-26 84-27-19-28-93-27-59-26-20-27 68-27-59-27 55-27 35h-27l-28-50-26-8-28 97-27-23-26 51-27-114-26 86-28-102-27 53-27-48-27 27-28 61-27-22-27-8-27 39-27-83-27 44Z"
                  ></path>
                </svg>
              </div>
              <div className="mb-10">
                <Center>
                  <CloudinaryVideo />
                </Center>
              </div>
              <div className="mb-20">
                <WavyHr className="text-indigo-600" />
              </div>
            </article>
          </m.div>
        </LazyMotion>
        <Footer />
      </Layout>
    </>
  )
}

export default Profile

export function Head(props: HeadProps) {
  return (
    <SEO type="Profile" title="Profile" description="Github Profile" image={ogimage} />
  )
}
