import { graphql, useStaticQuery } from 'gatsby'

type ReturnValue = {
  site: {
    siteMetadata: {
      title: string
      author: {
        name: string
        url: string
        summary: string
      }
      date?: string
      lastUpdated?: string
      image?: {
        src: string
        height: number
        width: number
      }
      meta?: {
        property: string
        content: string
      }[]
      keywords?: string[]
      pathname?: string
      lang?: string
      description: string
      siteUrl: string
      location: string
      social: {
        email: string
        phone: string
        facebook: string
        instagram: string
        twitter: string
        linkedin: string
        github: string
      }
    }
  }
  buildTime: string
}

export const useSiteMetadata = () => {
  const data = useStaticQuery<ReturnValue>(graphql`
    query {
      site {
        siteMetadata {
          title
          author {
            name
            url
            summary
          }
          description
          twitterUsername
          siteImage
          siteUrl
          location
          social {
            email
            phone
            facebook
            instagram
            twitter
            linkedin
            github
          }
        }
        buildTime
      }
    }
  `)

  return data.site.siteMetadata
}
