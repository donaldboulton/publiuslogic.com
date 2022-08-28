import * as React from 'react'
import { MDXProvider } from '@mdx-js/react'
import shortcodes from './src/components/ShortCodes'

export const wrapRootElement = ({ element }) => <MDXProvider components={shortcodes}>{element}</MDXProvider>
