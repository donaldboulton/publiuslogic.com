import * as React from 'react'
import { Link } from 'gatsby'
import { Helmet } from "react-helmet"
import { motion, AnimatePresence } from 'framer-motion'
import CookieConsent, { Cookies } from "react-cookie-consent"
import { MDXProvider } from "@mdx-js/react"
import FindOutMore from '@/components/findoutmore'
import Features from './features'
import Cta from '@/components/cta'
import Tweet from '@/components/Tweet'
import Callout from '@/components/Callout'
import WavyHr from '@/components/WavyHr'
import VideoPlayer from '@/components/Video/VideoPlayer'
import List from '@/components/List'
import Tooltip from '@/components/Tooltip'

interface LayoutProps {
  children: React.ReactNode
}

const shortcodes = {
  FindOutMore,
  Cta,
  VideoPlayer,
  Features,
  WavyHr,
  Callout,
  Tweet,
  List,
  Tooltip,
}

const Layout = ({ children, path }: LayoutProps) => {
  return (
    <> 
      <Helmet>
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        <link rel="rss" type="application/rss+xml" title="Rss" href="/rss.xml" />        
      </Helmet>     
        <div className="max-w-screen-xl mx-auto bg-primary-dark light:bg-offwhite text-white light:text-black transition-all duration-200 ease-linear antialiased font-sans">
          <motion.main
            key={path}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              mass: 0.35,
              stiffness: 75,
              duration: 0.3,
            }}
          >
            <MDXProvider components={shortcodes}>
              {children}
            </MDXProvider>
          </motion.main>
        </div>
      <CookieConsent
        enableDeclineButton 
        flipButtons
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        ariaAcceptLabel="Accept Cookies"
        ariaDeclineLabel='Decline Cookies'        
        cookieName="gatsby-gdpr-google-analytics"
          style={{
            background: "linear-gradient(to right, #4338ca, transparent, #4338ca)",
            textShadow: "2px 2px black",
          }}
          buttonStyle={{
            background: "radial-gradient(circle at top right, #4338ca, transparent)",
            color: "white",
            fontWeight: "bolder",
            borderRadius: '3px',
            border: "1px black",
            textShadow: "2px 2px black",
          }}
        >
          PubliusLogic uses cookies for user experience.{" "}
          <span 
            style={{ 
              fontSize: "14px",
              textAlign: "center",
              marginLeft: "20px"
            }}
          > 
            <Link to='/blog/privacy' className='text-gray-200' alt='Privacy Page'>
              Privacy Page
            </Link>
          </span>
        </CookieConsent>
    </>
  )
}

export default Layout
