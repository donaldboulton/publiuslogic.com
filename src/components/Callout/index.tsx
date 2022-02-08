import * as React from 'react'
import * as CSS from 'csstype'

export const calloutwrapper: CSS.Properties = {
  position: 'absolute',
  display: 'flex',
  top: '-24px',
  right: '-20px',
  borderRadius: '50%',
  padding: '8px',
  color: '#fff',
  border: '8px solid #282a36',
  background: '#282a36',
}

const callout: CSS.Properties = {
  '*:last-child': {
    marginBottom: '0px',
  },

  position: 'relative',
  padding: '30px 30px',
  marginBottom: '2.25rem',
  borderRadius: '50%',
  color: '#fff',
  border: '2px solid #9333ea',
  background: '#9333ea',
}

interface Props {
  className: string
  children: React.ReactNode
}

const Callout: React.FC<Props> = (props) => {
  const { className, children, ...rest } = props;
  return (
    <div style={calloutwrapper} className={className}>
        <aside style={callout}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className='w-6 h-6'
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
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
