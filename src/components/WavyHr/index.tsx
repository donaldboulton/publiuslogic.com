import * as React from 'react'

interface Props {
  className: string
}

const WavyHr: React.FC<Props> = (props) => {
  const { children, className } = props;
  return (
    <div className='text-center'>
      <hr 
        style={{
          textAlign: 'text-center',
          textDecoration: 'underline'
        }}
        className={className}
      />
      {children}
    </div>
  )
}

export default WavyHr