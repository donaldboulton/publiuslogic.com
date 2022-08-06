import * as React from 'react'
import { Link, Script } from 'gatsby'
import '@fontsource/kaushan-script'
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent'
import { MDXProvider } from '@mdx-js/react'
import FindOutMore from '@/components/FindOutMore'
import Features from '@/components/Features'
import Cta from '@/components/CTA'
import Callout from '@/components/Callout'
import WavyHr from '@/components/WavyHr'
import A from '@/components/A'
import Center from '@/components/Center'
import List from '@/components/List'
import ListItem from '@/components/List/ListItem'
import ListGrid from '@/components/ListGrid'
import Tooltip from '@/components/Tooltip'
import { LazyMotion, m } from 'framer-motion'
import VideoOne from '@/components/CloudinaryVideo/videoOne'
import VideoTwo from '@/components/CloudinaryVideo/videoTwo'
import CloudinaryVideo from '@/components/CloudinaryVideo'

const loadFeatures = () => import('@/components/FramerFeatures').then(res => res.default)

interface LayoutProps {
  children: React.ReactNode
}

const shortcodes = {
  A,
  FindOutMore,
  Center,
  Cta,
  Features,
  WavyHr,
  Callout,
  List,
  ListItem,
  ListGrid,
  Tooltip,
  CloudinaryVideo,
  VideoTwo,
  VideoOne,
}

const Layout = ({ children, path }: LayoutProps) => {
  console.log(getCookieConsentValue())
  getCookieConsentValue('gtag')
  return (
    <>
      <LazyMotion features={loadFeatures}>
        <div className="max-w-screen-xl mx-auto bg-primary-dark light:bg-offwhite text-white light:text-black transition-all duration-200 ease-linear antialiased font-sans">
          <m.main
            key={path}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: 'spring',
              mass: 0.35,
              stiffness: 75,
              duration: 0.2,
            }}
          >
            <MDXProvider components={shortcodes}>{children}</MDXProvider>
          </m.main>
        </div>
      </LazyMotion>
      <CookieConsent
        enableDeclineButton
        flipButtons
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        ariaAcceptLabel="Accept Cookies"
        ariaDeclineLabel="Decline Cookies"
        cookieName="gatsby-gdpr-google-analytics"
        style={{
          background: 'linear-gradient(to right, #4338ca, transparent, #4338ca)',
          textShadow: '2px 2px black',
        }}
        buttonStyle={{
          background: 'radial-gradient(circle at top right, #4338ca, transparent)',
          color: 'white',
          fontWeight: 'bolder',
          borderRadius: '3px',
          border: '1px black',
          textShadow: '2px 2px black',
        }}
      >
        PubliusLogic uses cookies for user experience.{' '}
        <span
          style={{
            fontSize: '14px',
            textAlign: 'center',
            marginLeft: '20px',
          }}
        >
          <Link to="/blog/privacy" className="text-gray-200" alt="Privacy Page">
            Privacy Page
          </Link>
        </span>
      </CookieConsent>
      <div id="modal"></div>
    </>
  )
}

export default Layout

export function Head(props: HeadProps) {
  return (
    <>
      <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
      <link rel="rss" type="application/rss+xml" title="Rss" href="/rss.xml" />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG}`}
        strategy="off-main-thread"
        forward={[`gtag`]}
      />
      <Script id="gtag-config" strategy="off-main-thread">
        {`
            window.dataLayer = window.dataLayer || []
            window.gtag = function gtag() { window.dataLayer.push(arguments) }
            gtag('js', new Date())
            gtag('config', ${process.env.GTAG}, { send_page_view: false })
          `}
      </Script>
    </>
  )
}
