import * as React from 'react'

const WavyHr = ({ className}) => {
  return (
    <div className='text-center'>
      <hr 
        style={{
          textAlign: 'text-center',
          textDecoration: 'underline'
        }}
        className={className}
      />
    </div>
  )
}

export default WavyHr