import * as React from 'react'
import { useSiteMetadata } from '@/hooks/use-site-metadata'

type SEOProps = {
  title?: string
  description?: string
  pathname?: string
}

const SEO: React.FC<React.PropsWithChildren<SEOProps>> = ({ title, description, image, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, siteUrl, twitterUsername } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content="https://publiuslogic.com/static/images/jpg/dbbg.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content="https://publiuslogic.com/static/images/jpg/dbbg.jpg" />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      {children}
    </>
  )
}

export default SEO
