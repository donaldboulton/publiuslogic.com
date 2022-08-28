import * as React from 'react'
import type { GatsbyBrowser } from 'gatsby'
import './src/styles/global.css'
import Layout from './src/components/Layout'
import { wrapRootElement as wrap } from './wrap-root-element'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = wrap
