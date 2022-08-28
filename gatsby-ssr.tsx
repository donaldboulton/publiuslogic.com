import * as React from 'react'
import type { GatsbySSR } from 'gatsby'
import Layout from './src/components/Layout'
import { wrapRootElement as wrap } from './wrap-root-element'

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = wrap

export function onRenderBody({ setPreBodyComponents, setHtmlAttributes }) {
  setHtmlAttributes({ lang: 'en' })

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
    <noscript
      key="gtm"
      dangerouslySetInnerHTML={{
        __html: `
                  <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WLCMLLP" height="0" width="0"
                      style="display:none;visibility:hidden"></iframe>
                `,
      }}
    />,
  ])
}
