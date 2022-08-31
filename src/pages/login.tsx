import * as React from 'react'
import type { HeadProps } from 'gatsby'
import { Link } from 'gatsby'
import Layout from '@/components/Layout'
import Login from '@/components/Login'
import SEO from '@/components/Seo'
import PageHero from '@/components/PageHero'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import Image from '../../static/svg/undraw/undraw_programming_re_kg9v.svg'

const LoginPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <PageHero
          title="Login"
          description="Login to PubliusLogic through Google"
          image={Image}
        />
        <div className="mt-10">
          <div className="flex items-center">
            <h2 className='text-lg font-medium'>Login to see your PubliusLogic / Google Profile</h2>
          </div>
          <div className="mt-6 mb-16 flex flex-col items-center">
            <Login />
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  )
}

export default LoginPage
