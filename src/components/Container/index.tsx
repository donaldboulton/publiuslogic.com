import * as React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className: string
  type: string
}

const Container: React.FC<ContainerProps> = props => {
  const { children, className, type } = props
  let containerClassName = 'container'

  if (typeof type === 'string') {
    containerClassName = `${containerClassName} container-${type}`
  }

  if (typeof className === 'string') {
    containerClassName = `${containerClassName} ${className}`
  }

  return <div className={containerClassName}>{children}</div>
}

export default Container
