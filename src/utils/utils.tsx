import * as React from 'react'
import Alert from '@/components/icons/alert'
import Info from '@/components/icons/info'
import { CalloutPrinciple } from '../types/index'

export const getPrincipleIcon = (principle: CalloutPrinciple): React.ReactNode => {
  switch (principle) {
    case 'info':
      return <Info />
    case 'danger':
      return <Alert />
  }
}
