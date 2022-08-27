import * as React from 'react'
import type { GatsbyBrowser } from 'gatsby'
import './src/styles/global.css'
import Layout from './src/components/Layout'
import { wrapRootElement as wrap } from './wrap-root-element'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = wrap

export const onRouteUpdate = ({ location }) => {
  if (process.env.NODE_ENV !== 'production') {
    return null
  }

  const pagePath = location ? location.pathname + location.search + location.hash : undefined
  setTimeout(() => {
    if (typeof gtag === 'function') {
      gtag('event', 'page_view', { page_path: pagePath })
    }
  }, 100)
}