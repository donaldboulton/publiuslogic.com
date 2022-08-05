import * as React from 'react'
import { JsonLd } from 'react-schemaorg'
import { Article, BreadcrumbList, Organization, Person, WebSite, WebPage, WithContext } from 'schema-dts'
import SiteMetadata from '@/utils/sitemetadata'

import Logo from '../../static/images/gatsby/publiuslogic-monogram-182-32.png'

interface JsonLDProps {
  type: string
  title: string
  description: string
  date: string
  lastUpdated: string
  keywords: string[]
  image: {
    src: string
    height: string
    width: string
  }
  pathname: string
  lang?: string
}

export default function JsonLD({
  type,
  title,
  description,
  date,
  lastUpdated,
  image,
  keywords,
  pathname,
  lang = 'en',
}: JsonLDProps) {
  const metadata = SiteMetadata().siteMetadata
  const email = metadata.social.email.replace('mailto:', '')
  const year = parseInt(lastUpdated.slice(0, 4))
  const w: WithContext<Website> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    about: {
      '@id': metadata.siteUrl,
    },
    audience: 'public',
    abstract: metadata.description,
    author: {
      '@id': metadata.author.url,
    },
    copyrightHolder: {
      '@id': metadata.siteUrl,
    },
    copyrightYear: year,
    creator: {
      '@id': metadata.siteUrl,
    },
    description: metadata.description,
    image: {
      '@type': 'ImageObject',
      url: image.src,
      width: image.width,
      height: image.height,
    },
    inLanguage: 'en',
    name: metadata.title,
    publisher: {
      '@id': metadata.siteUrl,
    },
    url: metadata.siteUrl,
  }
  const o: WithContext<Organization> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': metadata.siteUrl,
    address: metadata.location,
    contactPoint: {
      '@type': 'ContactPoint',
      email: email,
      telephone: metadata.social.phone.replace('tel:', ''),
    },
    description: metadata.description,
    email: email,
    founder: {
      '@id': metadata.author.url,
    },
    location: metadata.location,
    image: {
      '@type': 'ImageObject',
      url: image.src,
      width: image.width,
      height: image.height,
    },
    logo: {
      '@type': 'ImageObject',
      url: Logo,
    },
    name: metadata.title,
    sameAs: Object.values(metadata.social),
    url: metadata.siteUrl,
  }
  const b: WithContext<BreadcrumbList> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    itemListElement: [
      {
        '@type': 'ListItem',
        item: {
          '@id': metadata.siteUrl,
          name: metadata.title,
        },
        position: 1,
      },
      {
        '@type': 'ListItem',
        item: {
          '@id': pathname,
          name: title,
        },
        position: 2,
      },
    ],
    numberOfItems: 2,
    name: 'Breadcrumbs',
  }
  const p: WithContext<Person> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': metadata.author.url,
    name: metadata.author.name,
    url: metadata.author.url,
    worksFor: {
      '@id': metadata.siteUrl,
    },
  }
  const a: WithContext<Article> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    articleSection: type,
    author: {
      '@id': metadata.author.url,
    },
    copyrightHolder: {
      '@id': metadata.siteUrl,
    },
    copyrightYear: year,
    creativeWorkStatus: 'Published',
    creator: {
      '@id': metadata.siteUrl,
    },
    dateCreated: date,
    dateModified: lastUpdated,
    datePublished: lastUpdated,
    description: description,
    headline: title,
    keywords: keywords.join(', '),
    image: {
      '@type': 'ImageObject',
      url: image.src,
      width: image.width,
      height: image.height,
    },
    inLanguage: lang,
    mainEntityOfPage: pathname,
    name: title,
    publisher: {
      '@id': metadata.siteUrl,
    },
    url: pathname,
  }
  const wp: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    webpageSection: type,
    author: {
      '@id': metadata.siteUrl,
    },
    copyrightHolder: {
      '@id': metadata.siteUrl,
    },
    copyrightYear: year,
    creativeWorkStatus: 'Published',
    creator: {
      '@id': metadata.siteUrl,
    },
    dateCreated: lastUpdated,
    dateModified: lastUpdated,
    datePublished: lastUpdated,
    description: description,
    headline: title,
    image: {
      '@type': 'ImageObject',
      url: image.src,
      width: image.width,
      height: image.height,
    },
    inLanguage: lang,
    mainEntityOfPage: pathname,
    name: title,
    publisher: {
      '@id': metadata.siteUrl,
    },
    url: pathname,
  }
}
