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
        className="text-purple-600 mt-2 mb-2"
      />
      {children}
    </div>
  )
}

export default WavyHr