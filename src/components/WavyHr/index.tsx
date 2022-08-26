import * as React from 'react'
import { FC } from 'react'

interface WavyHrProps {
  className: string
}

const WavyHr: FC<WavyHrProps> = () => (
  <div className="text-center">
    <hr></hr>
  </div>
)

export default WavyHr
