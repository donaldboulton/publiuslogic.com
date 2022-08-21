import * as React from 'react'
import { ReactNode } from 'react'
import { ForwardRefComponent, HTMLMotionProps } from 'framer-motion'

export type MainButtonVariant = 'primary' | 'light'
export type IconButtonVariant = 'icon'

interface BaseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  as?: ForwardRefComponent<HTMLButtonElement, HTMLMotionProps<'button'>>
  type?: 'button' | 'reset' | 'submit'
}

interface MainButtonProps extends BaseButtonProps {
  variant: MainButtonVariant
  icon?: never
  startIcon?: ReactNode
  endIcon?: ReactNode
}

interface IconButtonProps extends BaseButtonProps {
  variant: IconButtonVariant
  icon: ReactNode | HTMLOrSVGElement
  startIcon?: never
  endIcon?: never
}

export type ButtonProps<T> = (MainButtonProps | IconButtonProps) & T
