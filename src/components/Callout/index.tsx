import * as React from 'react'
import * as CSS from 'csstype'
import { CalloutProps } from './types';

export const callOutWrapper: CSS.Properties = {
  position: 'absolute',
  display: 'flex',
  top: '-24px',
  right: '-20px',
  borderRadius: '50%',
  padding: '6px',
  color: '#fff',
  border: '6px solid transparent',
  background: '#282a36',

  variants: {
    variant: {
      info: {
        background: 'blue',
      },
      danger: {
        background: 'red',
      },
    },
  },
}

const callout: CSS.Properties = {
  '*:last-child': {
    marginBottom: '0px',
  },

  position: 'relative',
  padding: '30px 30px',
  marginBottom: '2.25rem',
  marginTop: '20px',
  borderRadius: '12px',
  color: '#fff',
  border: '2px solid #9333ea',
  background: '#9333ea',

  variants: {
    variant: {
      info: {
        background: 'blue',
      },
      danger: {
        background: 'red',
      },
    },
  },
}



const Callout: React.FC<CalloutProps> = (props) => {
  const { children, variant, ...rest } = props;
  return (
    <div
      style={callout} 
      variant={variant} 
      {...rest}
    >      
        <aside style={callOutWrapper} variant={variant}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className='w-6 h-6 text-indigo-500'
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </aside>
          {children}
    </div>
  )
}

export default Callout
