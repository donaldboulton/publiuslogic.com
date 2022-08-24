import * as React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { preToCodeBlock } from 'mdx-utils'
import { Code } from './src/components/Code'
import FindOutMore from './src/components/FindOutMore'
import Features from './src/components/Features'
import Cta from './src/components/CTA'
import Callout from './src/components/Callout'
import WavyHr from './src/components/WavyHr'
import A from './src/components/A'
import Center from './src/components/Center'
import List from './src/components/List'
import ListItem from './src/components/List/ListItem'
import ListGrid from './src/components/ListGrid'
import Tooltip from './src/components/Tooltip'
import VideoOne from './src/components/CloudinaryVideo/videoOne'
import VideoTwo from './src/components/CloudinaryVideo/videoTwo'
import CloudinaryVideo from './src/components/CloudinaryVideo'
import Table from './src/components/Table'
import Accordion from './src/components/Accordion'

const Acronym = props => <abbr style={{ color: '#8b5cf6' }} {...props} />

const components = {
  abbr: Acronym,
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
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <Code {...props} />
    } else {
      return <pre className="gatsby-highlight" {...preProps} />
    }
  },
}

export const wrapRootElement = ({ element }) => <MDXProvider components={components}>{element}</MDXProvider>
