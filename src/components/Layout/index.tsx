import * as React from 'react'
import { ReactNode } from 'react'
import { Link } from 'gatsby'
import { CookieConsent } from 'react-cookie-consent'
import { AnimatePresence, m } from 'framer-motion'

interface LayoutProps {
  children: ReactNode
}

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

const Layout = ({ children, path }: LayoutProps) => {
  return (
    <>
      <AnimatePresence wait>
        <div className="max-w-screen-xl mx-auto text-slate-900 dark:text-slate-200 antialiased">
          <m.main key={path} variants={animationConfiguration} transition={{ duration: 3 }}>
            {children}
          </m.main>
        </div>
      </AnimatePresence>
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
