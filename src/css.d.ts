// My css.d.ts file
import * as CSS from 'csstype'

declare module 'csstype' {
  interface Properties {
    variants?: string
    info: string
    danger: string

    // Add a CSS Custom Property
    ['--icon-color' as info]: '#9333ea',
    ['--icon-color' as danger]: '#fa383826',
  }
}