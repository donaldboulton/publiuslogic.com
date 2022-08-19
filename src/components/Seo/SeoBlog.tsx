import * as React from 'react'

type SeoBlogProps = {
  children?: React.ReactNode
}

const SeoBlog: React.FC<React.PropsWithChildren<SEOBlogProps>> = ({ children }) => {
  return (
    <>
      <meta name="og:type" content="website" />
      {children}
    </>
  )
}

export default SeoBlog
