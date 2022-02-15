import * as React from 'react'

const WavyHr = () => {
  return (
    <div className='text-center'>
      <hr 
        style={{
          textAlign: 'text-center',
          textDecoration: 'underline'
        }}
        className='underline underline-offset-2 decoration-wavy decoration-fuchsia-600'
      />
    </div>
  )
}

export default WavyHr