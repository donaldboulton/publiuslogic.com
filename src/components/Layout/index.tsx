import * as React from 'react'
import { Link } from 'gatsby'
import { CookieConsent } from 'react-cookie-consent'
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
import Table from '@/components/Table'
import Accordion from '@/components/Accordion'

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
  Table,
  Accordion,
}
const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

const Layout = ({ children, path }: LayoutProps) => {
  return (
    <>
      <LazyMotion features={loadFeatures}>
        <div className="max-w-screen-xl mx-auto text-slate-800 dark:text-slate-300 antialiased font-sans">
          <m.main key={path} variants={animationConfiguration} transition={{ duration: 2 }} exit='exit'>
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
        cookieName="gtag"
        expires={150}
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
    </>
  )
}

export default Layout
