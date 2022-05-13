import * as React from 'react'

type Props = {
  className: string
  children?: React.ReactNode
}

const WavyHr: React.FC<Props> = ({ className, children }) => (
  <div className="text-center">
    <hr className={children}></hr>
  </div>
)

export default WavyHr
