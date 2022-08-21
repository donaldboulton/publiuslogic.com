import * as CSS from 'csstype'

declare module 'csstype' {
  interface Properties {
    variants?: string
    info: string
    danger: string

    ['--icon-color' as info]: '#9333ea'
    ['--icon-color' as danger]: '#be123c'
  }
}
