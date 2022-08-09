import * as React from 'react'
import type { HeadProps } from 'gatsby'
import { Link } from 'gatsby'
import Layout from '@/components/Layout'
import SEO from '@/components/Seo'
import PageHero from '@/components/PageHero'
import BlogRoll from '@/components/BlogRoll'

import Image from '../../static/svg/undraw/undraw_building_websites_i78t.svg'
import OGImage from '../../static/images/undraw/undraw_building_websites_i78t.png'

interface TagProps {
  pageContext: {
    tag: string
  }
}

const ogimage = {
  src: OGImage,
  width: 1400,
  height: 450,
}

const TagPage = ({ pageContext }: TagProps) => {
  const tag = pageContext.tag
  const title = `Tag: ${tag}`
  return (
    <Layout>
      <SEO
        type="tags"
        title={title}
        description={`Posts with tag [${tag}]`}
        keywords={[tag]}
        image={ogimage}
        pathname={'/tags/' + tag}
      />
      <div className="mt-10">
        <article className="post">
          <header>
            <PageHero title={title} description={`Posts with tag [${tag}]`} image={Image} />
          </header>
        </article>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <Link
              to="/tags"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-fuchsia-600 hover:bg-fuchsia-700 md:py-4 md:text-lg md:px-10"
            >
              View All Tags
            </Link>
          </div>
        </div>
        <BlogRoll tag={tag} />
      </div>
    </Layout>
  )
}

export default TagPage

export function Head(props: HeadProps) {
  return (
    <>
      <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
      <link rel="rss" type="application/rss+xml" title="Rss" href="/rss.xml" />
    </>
  )
}
