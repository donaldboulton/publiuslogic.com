import * as React from 'react'
import { preToCodeBlock } from 'mdx-utils'
import { Code } from '@/components/Code'
import FindOutMore from '@/components/FindOutMore'
import Features from '@/components/Features'
import Cta from '@/components/CTA'
import Callout from '@/components/Callout'
import CalloutDanger from '@/components/Callout/CalloutDanger'
import CalloutLabel from '@/components/Callout/CalloutLabel'
import WavyHr from '@/components/WavyHr'
import A from '@/components/A'
import Center from '@/components/Center'
import List from '@/components/List'
import ListItem from '@/components/List/ListItem'
import ListGrid from '@/components/ListGrid'
import Tooltip from '@/components/Tooltip'
import VideoOne from '@/components/CloudinaryVideo/videoOne'
import VideoTwo from '@/components/CloudinaryVideo/videoTwo'
import CloudinaryVideo from '@/components/CloudinaryVideo'
import Table from '@/components/Table'
import Accordion from '@/components/Accordion'

const Acronym = props => <abbr style={{ color: '#8b5cf6' }} {...props} />

const shortcodes = {
  abbr: Acronym,
  A,
  FindOutMore,
  Center,
  Cta,
  Features,
  WavyHr,
  Callout,
  CalloutDanger,
  CalloutLabel,
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

export default shortcodes
