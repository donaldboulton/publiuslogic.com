import * as React from 'react'

type SeoBlogProps = {
  children?: React.ReactNode
}

const SeoBlog: React.FC<React.PropsWithChildren<SEOBlogProps>> = ({ children }) => {
  return (
    <>
      <meta name="og:type" content="webpage" />
      <link href="https://github.com/donaldboulton" rel="me" />
      <link href="https://twitter.com/donboulton" rel="me" />
      <link href="https://facebook.com/don.boulton" rel="me" />
      <link href="https://www.instagram.com/boulton3662" rel="me" />
      <link href="https://www.linkedin.com/donboulton" rel="me" />
      <link href="mailto:donaldboulton@gmail.com" rel="me" />
      {children}
    </>
  )
}

export default SeoBlog
