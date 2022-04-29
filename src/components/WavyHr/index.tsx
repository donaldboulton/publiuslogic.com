import * as React from 'react'

interface Props {
  className: string
  children?: React.ReactNode
}

const WavyHr: React.FC<Props> = props => {
  const { children } = props
  return (
    <div className="text-center">
      <hr className="text-center text-purple-600 mt-2 mb-2 underline" />
      {children}
    </div>
  )
}

export default WavyHr
