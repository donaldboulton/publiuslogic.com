import * as React from 'react'
import { wrapRootElement as wrap } from './wrap-root-element'
import { AnimatePresence } from 'framer-motion'
import { Partytown } from '@builder.io/partytown/react'

export function wrapPageElement({ element }) {
  return <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
}
export const wrapRootElement = wrap

const ORIGIN = 'https://www.googletagmanager.com'
const GATSBY_GA_MEASUREMENT_ID = 'GTM-WLCMLLP'

export function onRenderBody({ setHeadComponents, setPreBodyComponents, setHtmlAttributes }) {
  if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') return null

  setHtmlAttributes({ lang: 'en' })
  setHeadComponents([
    <Partytown key="partytown" forward={['gtag']} />,
    <script key="google-analytics" type="text/partytown" src={`${ORIGIN}/gtag/js?id=${GATSBY_GA_MEASUREMENT_ID}`} />,
    <script
      key="google-analytics-config"
      type="text/partytown"
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag(){ window.dataLayer.push(arguments);}
        gtag('js', new Date()); 
        gtag('config', '${GATSBY_GA_MEASUREMENT_ID}', { send_page_view: false })`,
      }}
    />,
  ])
  setPreBodyComponents([
    React.createElement('script', {
      key: 'darkMode',
      dangerouslySetInnerHTML: {
        __html: `void function() {
          window.__onThemeChange = function() {}
          var preferredTheme
          try {
            preferredTheme = localStorage.getItem('theme')
          } catch (err) { }
          function setTheme(newTheme) {
            if (preferredTheme && document.documentElement.classList.contains(preferredTheme)) {
              document.documentElement.classList.replace(preferredTheme, newTheme)
            } else {
              document.documentElement.classList.add(newTheme)
          }
          window.__theme = newTheme
          preferredTheme = newTheme
          window.__onThemeChange(newTheme)
        }
        window.__setPreferredTheme = function(newTheme) {
        setTheme(newTheme)
        try {
          localStorage.setItem('theme', newTheme)
        } catch (err) {}
      }
      var darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
        darkQuery.addListener(function(e) {
          window.__setPreferredTheme(e.matches ? 'dark' : 'light')
        })
        setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'))
      }()`,
      },
    }),
  ])
}
